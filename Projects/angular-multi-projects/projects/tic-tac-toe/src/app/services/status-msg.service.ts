import {Injectable} from '@angular/core';
import {Player} from "../shared/model/player.model";
import {GameStatus} from "../shared/model/game-status.enum";
import {GameStateService} from "./game-state.service";

@Injectable({
    providedIn: 'root'
})
export class StatusMsgService {

    private strStatusMsg!: string;

    constructor(private gameStateService: GameStateService) {
        this.initializeStrStatusMsg();
        this.initializeSubscriptions();
    }

    private initializeStrStatusMsg() {
        // Fetch initial game state and current player
        const initialPlayer: Player = this.gameStateService.getCurrentPlayer$().getValue();
        const initialGameStatus: GameStatus = this.gameStateService.getGameStatus$().getValue();

        // Initialize the message based on the initial state
        this.updateStatusMsg(initialGameStatus, initialPlayer);
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
        const statusMessages = {
            [GameStatus.IN_PROGRESS]: `Turn: ${currentPlayer.name} (${currentPlayer.symbol})`,
            [GameStatus.TIE]: "It's a Tie!",
            [GameStatus.WIN]: `Winner: ${currentPlayer.name} (${currentPlayer.symbol})`
        };
        this.strStatusMsg = statusMessages[gameStatus] || this.strStatusMsg;
    }

    getStrStatusMsg(): string {
        return this.strStatusMsg;
    }

}
