import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CellComponent} from "./cell/cell.component";
import {GameBoardService} from "../../../service/game-board.service";

@Component({
    selector: 'app-game-board',
    standalone: true,
    imports: [
        NgForOf,
        CellComponent
    ],
    templateUrl: './game-board.component.html',
    styleUrl: './game-board.component.css'
})
export class GameBoardComponent {

    constructor(public gameBoardService: GameBoardService,
                ) {


    }

}
