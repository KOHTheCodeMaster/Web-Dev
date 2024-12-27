import {Injectable} from '@angular/core';
import {Cell} from "../shared/model/cell.model";
import {CellState} from "../shared/model/cell-state.enum";
import {GameBoardService} from "./game-board.service";

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    private food!: Cell;

    constructor() {
        this.initFood();
    }

    private initFood() {
        this.food = new Cell(0, 0);
        this.food.setCellState(CellState.FOOD);
        this.food.setCellValue('s');
    }

    public moveFoodToRandomPosition(boardCells: Cell[][]) {
        //  Food should only be placed in empty cells
        let x: number = 0;
        let y: number = 0;

        do {
            x = Math.floor(Math.random() * GameBoardService.ROW_SIZE);
            y = Math.floor(Math.random() * GameBoardService.COL_SIZE);
        } while (boardCells[x][y].getCellState() !== CellState.EMPTY);

        this.food.x = x;
        this.food.y = y;
    }


    //  Getters
    //  -------

    getFood(): Cell {
        return this.food;
    }

}
