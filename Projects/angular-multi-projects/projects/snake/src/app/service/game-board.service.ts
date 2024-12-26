import {Injectable} from '@angular/core';
import {Cell} from "../shared/model/cell.model";
import {CellState} from "../shared/model/cell-state.enum";

@Injectable({
    providedIn: 'root'
})
export class GameBoardService {

    cellsGrid!: Cell[][];
    private rowSize: number = 10;
    private colSize: number = 10;

    constructor() {

        this.initCells();

    }

    initCells() {

        this.cellsGrid = [];

        for (let i = 0; i < this.rowSize; i++) {
            this.cellsGrid[i] = [];
            for (let j = 0; j < this.colSize; j++)
                this.cellsGrid[i][j] = new Cell(i, j);
        }

        this.initSnake();
        this.initFood();

    }

    initSnake() {

        let initialX = 5;
        let initialY = 5;

        this.cellsGrid[initialX][initialY].cellState = CellState.SNAKE_HEAD;
        this.cellsGrid[initialX][initialY + 1].cellState = CellState.SNAKE_BODY;
        this.cellsGrid[initialX][initialY + 2].cellState = CellState.SNAKE_BODY;

    }

    initFood() {
        //  Randomly place food on any empty cell in the grid

        let x: number;
        let y: number;

        do {
            x = Math.floor(Math.random() * this.rowSize);
            y = Math.floor(Math.random() * this.colSize);
        } while (this.cellsGrid[x][y].cellState !== CellState.EMPTY);

        this.cellsGrid[x][y].cellState = CellState.FOOD;

    }

    //  Getters
    //  -------

    getRowSize(): number {
        return this.rowSize;
    }

    getColSize(): number {
        return this.colSize;
    }

    getCellsGrid(): Cell[][] {
        return this.cellsGrid;
    }

}
