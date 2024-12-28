import {Injectable} from '@angular/core';
import {Cell} from "../shared/model/cell.model";
import {SnakeService} from "./snake.service";
import {GameStatus} from "../shared/model/game-status.enum";
import {GameStateService} from "./game-state.service";
import {FoodService} from "./food.service";

@Injectable({
    providedIn: 'root'
})
export class GameBoardService {

    boardCells!: Cell[][];
    public static ROW_SIZE: number = 10;
    public static COL_SIZE: number = 10;

    constructor(private snakeService: SnakeService,
                private foodService: FoodService,
                private gameStateService: GameStateService) {

        this.initBoardEmptyCells();

        //  Listen to snake service for refresh board event to refresh the board
        this.snakeService.getRefreshBoard$().subscribe(() => this.refreshBoard());

        //  Listen to game state service for game status change event to refresh the board when game is not started
        this.gameStateService.getGameStatus$().subscribe(gameStatus => {
            if (gameStatus === GameStatus.SELECT_LEVEL) {
                this.foodService.moveFoodToRandomPosition(this.boardCells);
                this.refreshBoard();
            }
        });

        //  Listen to food service for refresh food event to move food to random position
        this.foodService.getRefreshFood$().subscribe(() => this.foodService.moveFoodToRandomPosition(this.boardCells));

    }

    initBoardEmptyCells() {

        this.boardCells = [];

        for (let i = 0; i < GameBoardService.ROW_SIZE; i++) {
            this.boardCells[i] = [];
            for (let j = 0; j < GameBoardService.COL_SIZE; j++)
                this.boardCells[i][j] = new Cell(i, j);
        }

        this.foodService.moveFoodToRandomPosition(this.boardCells);
        this.renderFood();

        this.renderSnake();


    }

    refreshBoard() {

        this.resetBoardCellsToEmpty();
        this.renderFood();
        this.renderSnake();

    }

    renderFood() {
        let food = this.foodService.getFood();
        this.boardCells[food.x][food.y].replaceCell(food);
    }

    resetBoardCellsToEmpty() {
        for (let i = 0; i < GameBoardService.ROW_SIZE; i++)
            for (let j = 0; j < GameBoardService.COL_SIZE; j++)
                this.boardCells[i][j].clearCell();
    }

    renderSnake() {
        let snake = this.snakeService.getSnake();
        for (let cell of snake.bodyCells) this.boardCells[cell.x][cell.y].replaceCell(cell);

        if (!snake.isDead) this.boardCells[snake.head.x][snake.head.y].replaceCell(snake.getHead());

        // console.log(snake);
    }

    //  Getters
    //  -------

    getBoardCells(): Cell[][] {
        return this.boardCells;
    }

}
