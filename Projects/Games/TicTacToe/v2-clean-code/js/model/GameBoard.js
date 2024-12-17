export default class GameBoard {
    constructor() {
        this.cells = Array(9).fill(null); // Represent the gameBoard as a 1D array
        this.winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
    }

    isCellEmpty(index) {
        return this.cells[index] === null;
    }

    populateCellValue(index, symbol) {
        this.cells[index] = symbol;
    }

    checkWin() {
        for (let combination of this.winningCombinations) {
            const [a, b, c] = combination;
            if (this.cells[a] && this.cells[a] === this.cells[b] && this.cells[b] === this.cells[c])
                return combination;
        }
        return null;
    }

    isTie() {
        return this.cells.every(cell => cell !== null);
    }

    clear() {
        this.cells.fill(null);
    }

}
