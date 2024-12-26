import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Player} from "../shared/model/player.model";
import {GameStatus} from "../shared/model/game-status.enum";
import {TicTacToeSymbol} from "../shared/model/tic-tac-toe-symbol";

@Injectable({
    providedIn: 'root'
})
export class GameStateService {

    private players: Player[];
    private currentPlayer$: BehaviorSubject<Player>;
    private gameStatus$: BehaviorSubject<GameStatus>;
    private clearBoardEvent$: BehaviorSubject<boolean>;
    private tieScore: number;

    constructor() {
        //  Initialize the data members
        this.players = this.initializePlayers();
        this.currentPlayer$ = new BehaviorSubject<Player>(this.players[0]);
        this.gameStatus$ = new BehaviorSubject<GameStatus>(GameStatus.IN_PROGRESS);
        this.clearBoardEvent$ = new BehaviorSubject<boolean>(false);
        this.tieScore = 0;
    }

    initializePlayers(): Player[] {
        let player1 = new Player('1', 'Player 1', TicTacToeSymbol.X);
        player1.updateTurn(true);

        let player2 = new Player('2', 'Player 2', TicTacToeSymbol.O);
        return [player1, player2];
    }

    switchCurrentPlayer() {
        const currentPlayer = this.currentPlayer$.getValue();
        const nextPlayer = this.players.find(player => player.id !== currentPlayer.id);
        if (nextPlayer) {
            currentPlayer.updateTurn(false);
            nextPlayer.updateTurn(true);
            this.currentPlayer$.next(nextPlayer);
        } else console.error('Next player not found. Current player Id: ' + currentPlayer.id);
    }

    resetTurns() {
        this.players.forEach(player => player.updateTurn(false));
    }

    updateGameStatusValue(gameStatus: GameStatus) {
        this.gameStatus$.next(gameStatus);
    }

    updateCurrentPlayerScore() {
        const currentPlayer = this.currentPlayer$.getValue();
        currentPlayer.incrementScore();
    }

    updateTieScore() {
        this.tieScore++;
    }

    updateWinner() {
        const currentPlayer = this.currentPlayer$.getValue();
        currentPlayer.updateWinner(true);
    }

    resetWinners() {
        this.players.forEach(player => player.updateWinner(false));
    }

    restartGame() {
        this.clearBoardEvent$.next(true);
        this.updateGameStatusValue(GameStatus.IN_PROGRESS);
        this.switchCurrentPlayer();
        this.resetWinners();
    }

    resetGame(): void {
        this.players.forEach(player => player.resetScore());
        this.tieScore = 0;
        this.restartGame();
    }

    //  Getters
    //  -------

    getTieScore(): number {
        return this.tieScore;
    }

    getPlayerList(): Player[] {
        return this.players;
    }

    getCurrentPlayer$(): BehaviorSubject<Player> {
        return this.currentPlayer$;
    }

    getGameStatus$(): BehaviorSubject<GameStatus> {
        return this.gameStatus$;
    }

    getClearBoardEvent$(): BehaviorSubject<boolean> {
        return this.clearBoardEvent$;
    }

    //  -------

}
