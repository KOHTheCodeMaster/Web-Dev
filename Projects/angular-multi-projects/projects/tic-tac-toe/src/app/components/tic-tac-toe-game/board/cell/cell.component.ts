import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TicTacToeSymbol} from "../../../../shared/model/tic-tac-toe-symbol";
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

    @Input() ticTacToeSymbol: TicTacToeSymbol = TicTacToeSymbol.EMPTY;
    @Input() isWinningCell: boolean = false;
    @Output() cellClicked = new EventEmitter<void>();

}
