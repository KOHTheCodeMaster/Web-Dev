import {Component, Input} from '@angular/core';
import {CellState} from "../../../../shared/model/cell-state.enum";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-cell',
    standalone: true,
    imports: [
        NgClass
    ],
    templateUrl: './cell.component.html',
    styleUrl: './cell.component.css'
})
export class CellComponent {

    protected readonly CellState = CellState;

    @Input() cellState!: CellState;

    constructor() {
    }

}
