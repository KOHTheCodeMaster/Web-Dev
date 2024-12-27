import {Injectable} from '@angular/core';
import {Cell} from "../shared/model/cell.model";
import {SnakeService} from "./snake.service";
import {CellState} from "../shared/model/cell-state.enum";

@Injectable({
    providedIn: 'root'
})
export class GameBoardService {

    boardCells!: Cell[][];
    public static ROW_SIZE: number = 10;
    public static COL_SIZE: number = 10;

    constructor(private snakeService: SnakeService) {

        this.initBoardEmptyCells();
        this.renderSnake();

        //  Listen to snake service for any changes in the snake
        this.snakeService.getRefreshBoard$().subscribe(() => this.refreshBoard());

    }

    initBoardEmptyCells() {

        this.boardCells = [];

        for (let i = 0; i < GameBoardService.ROW_SIZE; i++) {
            this.boardCells[i] = [];
            for (let j = 0; j < GameBoardService.COL_SIZE; j++)
                this.boardCells[i][j] = new Cell(i, j);
        }

        // this.initFood();

    }

    refreshBoard() {

        this.resetBoardCellsToEmpty();

        this.renderSnake();

    }

    resetBoardCellsToEmpty() {
        for (let i = 0; i < GameBoardService.ROW_SIZE; i++)
            for (let j = 0; j < GameBoardService.COL_SIZE; j++)
                this.boardCells[i][j].setCellState(CellState.EMPTY);
    }

    renderSnake() {
        let snake = this.snakeService.getSnake();
        for (let cell of snake.bodyCells) this.boardCells[cell.x][cell.y].replaceCell(cell);

        if (!snake.isDead) this.boardCells[snake.head.x][snake.head.y].replaceCell(snake.getHead());

        console.log(snake);
    }

    /*
        initFood() {
            //  Randomly place food on any empty cell in the grid

            let x: number;
            let y: number;

            do {
                x = Math.floor(Math.random() * GameBoardService.rowSize);
                y = Math.floor(Math.random() * GameBoardService.colSize);
            } while (this.boardCells[x][y].getCellState() !== CellState.EMPTY);

            this.boardCells[x][y].setCellState(CellState.FOOD);

        }*/

    //  Getters
    //  -------

    getRowSize(): number {
        return GameBoardService.ROW_SIZE;
    }

    getColSize(): number {
        return GameBoardService.COL_SIZE;
    }

    getCellsGrid(): Cell[][] {
        return this.boardCells;
    }

}
