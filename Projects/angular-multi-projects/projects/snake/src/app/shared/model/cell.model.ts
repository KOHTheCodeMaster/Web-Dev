import {CellState} from "./cell-state.enum";

export class Cell {

    private cellState: CellState;
    private cellValue: string;

    constructor(public x: number, public y: number) {
        this.cellState = CellState.EMPTY;
        this.cellValue = '';
    }

    replaceCell(cell: Cell) {
        this.cellState = cell.cellState;
        this.cellValue = cell.cellValue;
    }

    //  Getters
    //  -------

    getCellState(): CellState {
        return this.cellState;
    }

    setCellState(cellState: CellState) {
        this.cellState = cellState;
    }

    getCellValue(): string {
        return this.cellValue;
    }

    setCellValue(cellValue: string) {
        this.cellValue = cellValue;
    }

}
