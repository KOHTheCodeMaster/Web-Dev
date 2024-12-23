import {Injectable} from '@angular/core';
import {Player} from "../shared/model/player.model";
import {GameStatus} from "../shared/model/game-status.enum";
import {GameStateService} from "./game-state.service";

@Injectable({
    providedIn: 'root'
})
export class StatusMsgService {

    private strStatusMsg: string;

    constructor(private gameStateService: GameStateService) {
        this.strStatusMsg = '';
        this.initializeSubscriptions();
    }

    private initializeSubscriptions() {

        this.gameStateService.getCurrentPlayer$().subscribe((player: Player) => {
            let gameStatus: GameStatus = this.gameStateService.getGameStatus$().getValue();
            this.updateStatusMsg(gameStatus, player);
        });

        this.gameStateService.getGameStatus$().subscribe((gameStatus: GameStatus) => {
            let currentPlayer: Player = this.gameStateService.getCurrentPlayer$().getValue();
            this.updateStatusMsg(gameStatus, currentPlayer);
        });

    }

    updateStatusMsg(gameStatus: GameStatus, currentPlayer: Player) {
        if (gameStatus === GameStatus.IN_PROGRESS) this.strStatusMsg = `Turn: ${currentPlayer.name} (${currentPlayer.symbol})`;
        else if (gameStatus === GameStatus.TIE) this.strStatusMsg = "It's a Tie!";
        else if (gameStatus === GameStatus.WIN) this.strStatusMsg = `Winner: ${currentPlayer.name} (${currentPlayer.symbol})`;
    }

    getStrStatusMsg(): string {
        return this.strStatusMsg;
    }

}
