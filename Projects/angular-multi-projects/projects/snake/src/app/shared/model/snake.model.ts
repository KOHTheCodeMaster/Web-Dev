import {SnakeDirection} from "./snake-direction.enum";
import {Cell} from "./cell.model";
import {CellState} from "./cell-state.enum";

export class Snake {

    public size: number;
    public bodyCells!: Cell[];  //  excludes the head
    public head!: Cell;
    private snakeDirection: SnakeDirection;
    public foodConsumed: boolean;
    public isDead: boolean = false;

    constructor() {
        this.size = 4;
        this.foodConsumed = false;
        this.snakeDirection = SnakeDirection.RIGHT;
        this.initSnakeBodyCells();
        this.initHead();
    }

    initSnakeBodyCells() {
        let initialX = 2;
        let initialY = 3;
        this.bodyCells = [];

        for (let i = 0; i < this.size - 1; i++) {
            let cell = new Cell(initialX, initialY - i);
            cell.setCellState(CellState.SNAKE_BODY);
            this.bodyCells.push(cell);
        }
    }

    initHead() {
        this.head = new Cell(2, 4);
        this.head.setCellState(CellState.SNAKE_HEAD);
        this.head.setCellValue(SnakeDirection.RIGHT);
    }


    //  Getters and Setters
    //  -------------------

    getHead(): Cell {
        return this.head;
    }

    getBodyCells(): Cell[] {
        return this.bodyCells;
    }

    getSnakeDirection(): SnakeDirection {
        return this.snakeDirection;
    }

    setSnakeDirection(snakeDirection: SnakeDirection) {
        this.snakeDirection = snakeDirection;
    }

}
