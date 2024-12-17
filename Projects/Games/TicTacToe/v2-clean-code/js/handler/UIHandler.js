export default class UIHandler {

    constructor() {
        this.statusMessage = document.getElementById('id-status-msg');
        this.cells = document.querySelectorAll('.data-cell');
        this.scoreboard = {
            divElementPlayer1: document.getElementById('id-div-player-1-score'),
            divElementPlayer2: document.getElementById('id-div-player-2-score'),
            divElementTie: document.getElementById('id-div-tie-score'),
            spanElementScorePlayer1: document.getElementById('id-span-player-1-score'),
            spanElementScorePlayer2: document.getElementById('id-span-player-2-score'),
            scoreTie: document.getElementById('id-span-tie-score')
        };
    }

    init(callbacks) {
        this.cells.forEach((cell, index) => {
            cell.addEventListener('click', () => callbacks.onCellClick(index));
        });

        document.getElementById('id-btn-restart').addEventListener('click', callbacks.onRestart);
        document.getElementById('id-btn-reset').addEventListener('click', callbacks.onReset);
    }

    updateStatusMsg(msg) {
        this.statusMessage.textContent = msg;
    }

    renderSymbolOnCell(index, symbol) {
        this.cells[index].textContent = symbol;
    }

    removeWinnerFromScoreboard() {
        if (this.scoreboard.divElementPlayer1.classList.contains('text-green-500'))
            this.scoreboard.divElementPlayer1.classList.remove('text-green-500');

        if (this.scoreboard.divElementPlayer2.classList.contains('text-green-500'))
            this.scoreboard.divElementPlayer2.classList.remove('text-green-500');

        if (this.scoreboard.divElementTie.classList.contains('text-green-500'))
            this.scoreboard.divElementTie.classList.remove('text-green-500');
    }

    highlightWinnerOnScoreboard(option) {

        if (option === 'player1') {

            if (!this.scoreboard.divElementPlayer1.classList.contains('text-green-500'))
                this.scoreboard.divElementPlayer1.classList.add('text-green-500');

            if (this.scoreboard.divElementPlayer2.classList.contains('text-green-500'))
                this.scoreboard.divElementPlayer2.classList.remove('text-green-500');

            if (this.scoreboard.divElementTie.classList.contains('text-green-500'))
                this.scoreboard.divElementTie.classList.remove('text-green-500');

        } else if (option === 'player2') {

            if (!this.scoreboard.divElementPlayer2.classList.contains('text-green-500'))
                this.scoreboard.divElementPlayer2.classList.add('text-green-500');

            if (this.scoreboard.divElementPlayer1.classList.contains('text-green-500'))
                this.scoreboard.divElementPlayer1.classList.remove('text-green-500');

            if (this.scoreboard.divElementTie.classList.contains('text-green-500'))
                this.scoreboard.divElementTie.classList.remove('text-green-500');

        } else {

            if (!this.scoreboard.divElementTie.classList.contains('text-green-500'))
                this.scoreboard.divElementTie.classList.add('text-green-500');

            if (this.scoreboard.divElementPlayer1.classList.contains('text-green-500'))
                this.scoreboard.divElementPlayer1.classList.remove('text-green-500');

            if (this.scoreboard.divElementPlayer2.classList.contains('text-green-500'))
                this.scoreboard.divElementPlayer2.classList.remove('text-green-500');

        }

    }

    highlightWinningCell(winningCells) {
        winningCells.forEach(index => this.cells[index].classList.add('text-green-500'));
    }

    highlightFocusOnScoreboard(option) {

        if (option === 'player1') {

            //  Mark Player 1 as Active
            if (!this.scoreboard.divElementPlayer1.classList.contains('font-bold'))
                this.scoreboard.divElementPlayer1.classList.add('font-bold');
            if (this.scoreboard.divElementPlayer1.classList.contains('opacity-50'))
                this.scoreboard.divElementPlayer1.classList.remove('opacity-50');

            //  Mark Player 2 as Inactive
            if (this.scoreboard.divElementPlayer2.classList.contains('font-bold'))
                this.scoreboard.divElementPlayer2.classList.remove('font-bold');
            if (!this.scoreboard.divElementPlayer2.classList.contains('opacity-50'))
                this.scoreboard.divElementPlayer2.classList.add('opacity-50');

            //  Mark Tie as Inactive
            if (this.scoreboard.divElementTie.classList.contains('font-bold'))
                this.scoreboard.divElementTie.classList.remove('font-bold');
            if (!this.scoreboard.divElementTie.classList.contains('opacity-50'))
                this.scoreboard.divElementTie.classList.add('opacity-50');

        } else if (option === 'player2') {

            //  Mark Player 2 as Active
            if (!this.scoreboard.divElementPlayer2.classList.contains('font-bold'))
                this.scoreboard.divElementPlayer2.classList.add('font-bold');
            if (this.scoreboard.divElementPlayer2.classList.contains('opacity-50'))
                this.scoreboard.divElementPlayer2.classList.remove('opacity-50');

            //  Mark Player 1 as Inactive
            if (this.scoreboard.divElementPlayer1.classList.contains('font-bold'))
                this.scoreboard.divElementPlayer1.classList.remove('font-bold');
            if (!this.scoreboard.divElementPlayer1.classList.contains('opacity-50'))
                this.scoreboard.divElementPlayer1.classList.add('opacity-50');

            //  Mark Tie as Inactive
            if (this.scoreboard.divElementTie.classList.contains('font-bold'))
                this.scoreboard.divElementTie.classList.remove('font-bold');
            if (!this.scoreboard.divElementTie.classList.contains('opacity-50'))
                this.scoreboard.divElementTie.classList.add('opacity-50');

        } else if (option === 'tie') {

            //  Mark Tie as Active
            if (!this.scoreboard.divElementTie.classList.contains('font-bold'))
                this.scoreboard.divElementTie.classList.add('font-bold');
            if (this.scoreboard.divElementTie.classList.contains('opacity-50'))
                this.scoreboard.divElementTie.classList.remove('opacity-50');

            //  Mark Player 1 as Inactive
            if (this.scoreboard.divElementPlayer1.classList.contains('font-bold'))
                this.scoreboard.divElementPlayer1.classList.remove('font-bold');
            if (!this.scoreboard.divElementPlayer1.classList.contains('opacity-50'))
                this.scoreboard.divElementPlayer1.classList.add('opacity-50');

            //  Mark Player 2 as Inactive
            if (this.scoreboard.divElementPlayer2.classList.contains('font-bold'))
                this.scoreboard.divElementPlayer2.classList.remove('font-bold');
            if (!this.scoreboard.divElementPlayer2.classList.contains('opacity-50'))
                this.scoreboard.divElementPlayer2.classList.add('opacity-50');

        }

    }

    updateScore(playerOption, score) {

        if (playerOption === 'player1') this.scoreboard.spanElementScorePlayer1.textContent = score;
        else if (playerOption === 'player2') this.scoreboard.spanElementScorePlayer2.textContent = score;
        else if (playerOption === 'tie') this.scoreboard.scoreTie.textContent = score;

    }

    clearGameBoardUI() {
        this.cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('text-green-500');
        });
    }

    clearScoreboardUI() {
        this.scoreboard.spanElementScorePlayer1.textContent = 0;
        this.scoreboard.spanElementScorePlayer2.textContent = 0;
        this.scoreboard.scoreTie.textContent = 0;
    }

}
