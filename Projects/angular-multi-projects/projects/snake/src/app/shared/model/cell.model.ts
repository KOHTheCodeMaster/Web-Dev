import {CellState} from "./cell-state.enum";

export class Cell {

    public cellState: CellState;

    constructor(public x: number, public y: number) {
        this.cellState = CellState.EMPTY;
    }

}
