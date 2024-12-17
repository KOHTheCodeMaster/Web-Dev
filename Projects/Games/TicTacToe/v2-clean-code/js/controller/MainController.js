export default class MainController {

    constructor(gameLogicHandler, uiHandler) {
        this.gameLogicHandler = gameLogicHandler;
        this.uiHandler = uiHandler;

        // Initialize event listeners
        this.uiHandler.init({
            onCellClick: (index) => this.handleCellClick(index),
            onRestart: () => this.restartGame(),
            onReset: () => this.resetGame()
        });
    }

    handleCellClick(index) {

        if (this.gameLogicHandler.gameStatus !== 'ongoing') this.restartGame();
        else if (!this.gameLogicHandler.gameBoard.isCellEmpty(index)) return;
        else this.populateCell(index);

        this.gameLogicHandler.processMove();

        if (this.gameLogicHandler.gameStatus === 'win') {

            let option = this.gameLogicHandler.currentPlayerIndex === 0
                ? 'player1'
                : 'player2';

            //  Update Winner Score
            this.gameLogicHandler.getCurrentPlayer().incrementScore();
            this.uiHandler.updateScore(option, this.gameLogicHandler.getCurrentPlayer().score);

            this.uiHandler.highlightFocusOnScoreboard(option);
            this.uiHandler.highlightWinnerOnScoreboard(option);

            //  Update Status Message with Winner
            this.uiHandler.updateStatusMsg(this.gameLogicHandler.getCurrentPlayer().getWinMsg());

            //  Highlight Winning Combination Cells
            this.uiHandler.highlightWinningCell(this.gameLogicHandler.winningCombination);

        } else if (this.gameLogicHandler.gameStatus === 'tie') {

            //  Update Tie Score
            this.gameLogicHandler.tieScore += 1;

            let option = 'tie';
            this.uiHandler.updateScore(option, this.gameLogicHandler.tieScore);
            this.uiHandler.highlightFocusOnScoreboard(option);
            this.uiHandler.highlightWinnerOnScoreboard(option);

            //  Update Status Message with Tie
            this.uiHandler.updateStatusMsg("It's a Tie!");

        } else if (this.gameLogicHandler.gameStatus === 'ongoing') {

            this.switchPlayer();
            this.uiHandler.updateStatusMsg(this.gameLogicHandler.getCurrentPlayer().getTurnMsg());

            this.uiHandler.highlightFocusOnScoreboard(this.gameLogicHandler.currentPlayerIndex === 0 ? 'player1' : 'player2');

        }

    }

    restartGame() {

        this.clearGameBoard();
        this.switchPlayer();
        this.uiHandler.updateStatusMsg(this.gameLogicHandler.getCurrentPlayer().getTurnMsg());

        let strOption = this.gameLogicHandler.getCurrentPlayer() === this.gameLogicHandler.players[0]
            ? 'player1'
            : 'player2';
        this.uiHandler.highlightFocusOnScoreboard(strOption);
        this.uiHandler.removeWinnerFromScoreboard();

    }

    resetGame() {

        this.restartGame();

        this.clearScoreboard();
        this.resetCurrentPlayer();

    }

    populateCell(index) {
        let symbol = this.gameLogicHandler.getCurrentPlayer().symbol;
        this.gameLogicHandler.gameBoard.populateCellValue(index, symbol);
        this.uiHandler.renderSymbolOnCell(index, symbol);
    }

    switchPlayer() {
        this.gameLogicHandler.switchPlayerIndex();
        this.uiHandler.highlightFocusOnScoreboard(this.gameLogicHandler.currentPlayerIndex === 0 ? 'player1' : 'player2');
    }

    clearGameBoard() {
        this.gameLogicHandler.gameBoard.clear();
        this.uiHandler.clearGameBoardUI();
    }

    clearScoreboard() {
        this.gameLogicHandler.clearScoreboard();
        this.uiHandler.clearScoreboardUI();
    }

    resetCurrentPlayer() {
        this.gameLogicHandler.currentPlayerIndex = 0;
        this.uiHandler.highlightFocusOnScoreboard('player1');
    }

}
