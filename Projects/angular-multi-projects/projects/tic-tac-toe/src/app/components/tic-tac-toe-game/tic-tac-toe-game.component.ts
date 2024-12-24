import {Component} from '@angular/core';
import {StatusMsgComponent} from "./status-msg/status-msg.component";
import {BoardComponent} from "./board/board.component";
import {ScoreboardComponent} from "./scoreboard/scoreboard.component";

@Component({
    selector: 'app-tic-tac-toe-game',
    standalone: true,
    imports: [
        StatusMsgComponent,
        BoardComponent,
        ScoreboardComponent
    ],
    templateUrl: './tic-tac-toe-game.component.html',
    styleUrl: './tic-tac-toe-game.component.css'
})
export class TicTacToeGameComponent {

    constructor() {
    }

}
