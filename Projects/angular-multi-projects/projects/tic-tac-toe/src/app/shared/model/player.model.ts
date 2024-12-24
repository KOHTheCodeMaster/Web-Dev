import {TicTacToeSymbol} from "./tic-tac-toe-symbol";

export class Player {

    score: number = 0;
    hasTurn: boolean = false;
    isWinner: boolean = false;

    constructor(public id: string, public name: string, public symbol: TicTacToeSymbol) {
    }

    updateTurn(hasTurn: boolean): void {
        this.hasTurn = hasTurn;
    }

    updateWinner(isWinner: boolean): void {
        this.isWinner = isWinner;
    }

    incrementScore(): void {
        this.score++;
    }

    resetScore(): void {
        this.score = 0;
    }

}
