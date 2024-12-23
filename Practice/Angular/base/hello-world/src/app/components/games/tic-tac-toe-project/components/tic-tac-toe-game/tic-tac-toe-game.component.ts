import {Component} from '@angular/core';
import {GameStatus} from "../../shared/model/game-status.enum";
import {StatusMsgComponent} from "./status-msg/status-msg.component";
import {GameStateService} from "../../services/game-state.service";
import {Player} from "../../shared/model/player.model";
import {BoardComponent} from "./board/board.component";

@Component({
    selector: 'app-tic-tac-toe-game',
    standalone: true,
    imports: [
        StatusMsgComponent,
        BoardComponent
    ],
    templateUrl: './tic-tac-toe-game.component.html',
    styleUrl: './tic-tac-toe-game.component.css'
})
export class TicTacToeGameComponent {

    protected readonly GameStatus = GameStatus;

    constructor(public gameStateService: GameStateService) {
        console.log(this.gameStateService.getGameStatus$().getValue())

    }

    getCurrentGameStatus(): string {
        let gameStatus: GameStatus = this.gameStateService.getGameStatus$().getValue();

        if (gameStatus === GameStatus.IN_PROGRESS) return '1';
        else if (gameStatus === GameStatus.WIN) return '2';
        else if (gameStatus === GameStatus.TIE) return '3';
        else return '0';

    }

    selectPlayer($event: Event) {
        const target = $event.target as HTMLSelectElement;
        const selectedPlayerId = target.value;
        this.gameStateService.updateCurrentPlayerValue(selectedPlayerId);

        let player: Player = this.gameStateService.getCurrentPlayer$().getValue();
        console.log('Selected player: ' + player.name);
    }

    selectGameStatus($event: Event) {
        const target = $event.target as HTMLSelectElement;
        const gameStatus: GameStatus = target.value as GameStatus;

        this.gameStateService.updateGameStatusValue(gameStatus);
        console.log('Selected game status:', gameStatus);
    }

}
