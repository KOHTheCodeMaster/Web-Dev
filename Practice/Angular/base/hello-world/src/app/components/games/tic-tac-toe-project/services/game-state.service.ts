import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Player} from "../shared/model/player.model";
import {GameStatus} from "../shared/model/game-status.enum";
import {PlayerHelper} from "../shared/utils/player-helper";

@Injectable({
    providedIn: 'root'
})
export class GameStateService {

    private players: Player[];
    private currentPlayer$: BehaviorSubject<Player>;
    private gameStatus$: BehaviorSubject<GameStatus>;

    constructor() {

        //  Initialize the data members
        this.players = PlayerHelper.initializePlayers();
        this.currentPlayer$ = new BehaviorSubject<Player>(this.players[0]);
        this.gameStatus$ = new BehaviorSubject<GameStatus>(GameStatus.IN_PROGRESS);

    }

    switchCurrentPlayer() {
        const currentPlayer = this.currentPlayer$.getValue();
        const nextPlayer = this.players.find(player => player.id !== currentPlayer.id);
        if (nextPlayer) this.currentPlayer$.next(nextPlayer);
        else console.error('Next player not found. Current player Id: ' + currentPlayer.id);
    }

    updateCurrentPlayerValue(selectedPlayerId: string) {
        const player = this.players.find(player => player.id === selectedPlayerId);
        if (player) this.currentPlayer$.next(player);
        else console.error('Player Id not found. Id: ' + selectedPlayerId);
    }

    updateGameStatusValue(gameStatus: GameStatus) {
        this.gameStatus$.next(gameStatus);
    }


    //  Getters and Setters
    //  -------------------

    getCurrentPlayer$(): BehaviorSubject<Player> {
        return this.currentPlayer$;
    }

    setCurrentPlayer$(currentPlayer$: BehaviorSubject<Player>) {
        this.currentPlayer$ = currentPlayer$;
    }

    getGameStatus$(): BehaviorSubject<GameStatus> {
        return this.gameStatus$;
    }

    setGameStatus$(gameStatus$: BehaviorSubject<GameStatus>) {
        this.gameStatus$ = gameStatus$;
    }

    //  -------------------

}
