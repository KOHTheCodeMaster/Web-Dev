import {Injectable} from '@angular/core';
import {Cell} from "../shared/model/cell.model";
import {SnakeService} from "./snake.service";

@Injectable({
    providedIn: 'root'
})
export class GameBoardService {

    boardCells!: Cell[][];
    private rowSize: number = 10;
    private colSize: number = 10;

    constructor(private snakeService: SnakeService) {

        this.initBoardEmptyCells();
        this.renderSnake();

        //  Listen to snake service for any changes in the snake
        this.snakeService.getRefreshBoard$().subscribe(() => this.refreshBoard());

    }

    initBoardEmptyCells() {

        this.boardCells = [];

        for (let i = 0; i < this.rowSize; i++) {
            this.boardCells[i] = [];
            for (let j = 0; j < this.colSize; j++)
                this.boardCells[i][j] = new Cell(i, j);
        }

        // this.initFood();

    }

    refreshBoard() {

        this.renderSnake();

    }

    renderSnake() {
        let snake = this.snakeService.getSnake();
        this.boardCells[snake.head.x][snake.head.y].replaceCell(snake.getHead());
        for (let cell of snake.bodyCells) this.boardCells[cell.x][cell.y].replaceCell(cell);
    }

    /*
        initFood() {
            //  Randomly place food on any empty cell in the grid

            let x: number;
            let y: number;

            do {
                x = Math.floor(Math.random() * this.rowSize);
                y = Math.floor(Math.random() * this.colSize);
            } while (this.boardCells[x][y].getCellState() !== CellState.EMPTY);

            this.boardCells[x][y].setCellState(CellState.FOOD);

        }*/

    //  Getters
    //  -------

    getRowSize(): number {
        return this.rowSize;
    }

    getColSize(): number {
        return this.colSize;
    }

    getCellsGrid(): Cell[][] {
        return this.boardCells;
    }

}
