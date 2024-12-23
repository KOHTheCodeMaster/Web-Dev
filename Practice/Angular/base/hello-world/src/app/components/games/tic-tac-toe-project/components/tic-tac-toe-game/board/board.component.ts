import {Component} from '@angular/core';
import {CellComponent} from "./cell/cell.component";
import {TicTacToeSymbol} from "../../../shared/model/tic-tac-toe-symbol";
import {GameStateService} from "../../../services/game-state.service";
import {GameStatus} from "../../../shared/model/game-status.enum";
import {NgForOf} from "@angular/common";
import {ScoreService} from "../../../services/score.service";

@Component({
    selector: 'app-board',
    standalone: true,
    imports: [
        CellComponent,
        NgForOf
    ],
    templateUrl: './board.component.html',
    styleUrl: './board.component.css'
})
export class BoardComponent {

    cellValues: TicTacToeSymbol[];
    winningCells: boolean[];

    constructor(private gameStateService: GameStateService, private scoreService: ScoreService) {
        this.cellValues = new Array(9).fill(TicTacToeSymbol.EMPTY); // Initializes 3x3 grid as array of 9 empty cells
        this.winningCells = new Array(9).fill(false);
    }

    handleCellClick(index: number): void {

        console.log('Game Staus: ' + this.gameStateService.getGameStatus$().getValue());

        if (this.gameStateService.getGameStatus$().getValue() === GameStatus.IN_PROGRESS) {

            //  Skip if the cell is already filled
            if (this.cellValues[index] !== TicTacToeSymbol.EMPTY) return;

            //  Set the symbol for the clicked cell
            this.cellValues[index] = this.gameStateService.getCurrentPlayer$().getValue().symbol;

            //  After each move, check if the game has been won or tied, otherwise switch the current player
            let winningCombination = this.checkWin();
            if (winningCombination) {

                this.gameStateService.updateGameStatusValue(GameStatus.WIN);

                //  Highlight Winning Combination
                for (const cellIndex of winningCombination) this.winningCells[cellIndex] = true;

                this.scoreService.updateScore(this.gameStateService.getCurrentPlayer$().getValue().symbol);

            } else if (this.checkTie()) {

                this.gameStateService.updateGameStatusValue(GameStatus.TIE);
                this.scoreService.updateScore('Tie');

            } else this.gameStateService.switchCurrentPlayer();

        } else {

            //  If already Game Over then, reset the board and start a new game
            this.resetBoard();
            this.gameStateService.updateGameStatusValue(GameStatus.IN_PROGRESS);
            this.gameStateService.switchCurrentPlayer();
            this.scoreService.resetScore();

        }
    }

    checkWin(): number[] | null {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],    // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8],    // Columns
            [0, 4, 8], [2, 4, 6],               // Diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (this.cellValues[a] && this.cellValues[a] === this.cellValues[b] && this.cellValues[b] === this.cellValues[c])
                return combination;
        }

        return null;
    }

    checkTie(): boolean {
        return this.cellValues.every(cell => cell !== TicTacToeSymbol.EMPTY);
    }

    resetBoard(): void {
        this.cellValues.fill(TicTacToeSymbol.EMPTY);
        this.winningCells.fill(false);
    }

}
