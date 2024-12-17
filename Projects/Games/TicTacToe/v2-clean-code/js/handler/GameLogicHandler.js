import GameBoard from "../model/GameBoard.js";
import Player from "../model/Player.js";

export default class GameLogicHandler {

    constructor() {
        this.gameBoard = new GameBoard();
        this.players = [
            new Player('Player 1', 'X'),
            new Player('Player 2', 'O')
        ];
        this.gameStatus = 'ongoing';
        this.currentPlayerIndex = 0;
        this.tieScore = 0;
        this.winningCombination = null;
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    switchPlayerIndex() {
        this.currentPlayerIndex = 1 - this.currentPlayerIndex;
    }

    processMove() {
        const winningCombination = this.gameBoard.checkWin();

        if (winningCombination) {
            this.gameStatus = 'win';
            this.winningCombination = winningCombination;
        }
        else if (this.gameBoard.isTie()) this.gameStatus = 'tie';
        else this.gameStatus = 'ongoing';
    }

    clearScoreboard() {
        this.players.forEach(player => (player.score = 0));
    }

}
