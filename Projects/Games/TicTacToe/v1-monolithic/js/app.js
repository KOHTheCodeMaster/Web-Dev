let player1, player2, currentPlayer;
let divStatusMsg;
let gameStatus;
let winningCells;

class Player {
    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
    }
}

main();

function main() {

    //  Initialize Players
    player1 = new Player('Player 1', 'X');
    player2 = new Player('Player 2', 'O');
    currentPlayer = player1;

    gameStatus = 'ongoing';
    winningCells = null;
    divStatusMsg = document.getElementById('id-status-msg');

    updateStatusMsgByOption();  //  Display initial status message

    cells = document.getElementsByClassName('data-cell');
    for (let cell of cells) cell.addEventListener('click', cellClick);

}

function updateStatusMsgByOption(option) {

    if (option === 'player1-turn') divStatusMsg.textContent = 'Turn: Player 1 (X)';
    else if (option === 'player2-turn') divStatusMsg.textContent = 'Turn: Player 2 (O)';
    else if (option === 'player1-win') divStatusMsg.textContent = 'Winner: Player 1 (X)';
    else if (option === 'player2-win') divStatusMsg.textContent = 'Winner: Player 2 (O)';
    else if (option === 'tie') divStatusMsg.textContent = 'It\'s a Tie!';
    else divStatusMsg.textContent = 'Click On The Board To Start!';

}

function cellClick() {

    if (gameStatus === 'win' || gameStatus === 'tie') restartGame();
    else if (gameStatus === 'ongoing') {

        if (this.textContent !== '') return;    //  Check if cell is already filled
        this.textContent = currentPlayer.symbol;    //  Fill the cell with current player symbol

        checkWin(); //  Update game status based on current player's move (win/tie/ongoing)
        if (gameStatus !== 'win') checkTie();   //  If current player has not won, check if game is a tie

        //  Based on game status, switch current player, update status message and scoreboard
        if (gameStatus === 'ongoing') {

            //  Game is still ongoing, switch current player, update status message and scoreboard focus
            switchCurrentPlayer();  //  Switch Current Player
            updateStatusMsgByOption(currentPlayer === player1 ? 'player1-turn' : 'player2-turn');
            updatePlayerFocusOnScoreboard();

        } else if (gameStatus === 'win') {

            //  Highlight the Winning Combination on the Board
            for (let cell of winningCells) cell.classList.add('text-green-500');

            //  Update Scoreboard & Status Message based on Winner
            let winnerOption = currentPlayer === player1 ? 'player1-win' : 'player2-win';
            updateStatusMsgByOption(winnerOption);
            updateWinnerOnScoreboard(winnerOption);

        } else if (gameStatus === 'tie') {
            //  If game is a tie, update status message and scoreboard
            updateStatusMsgByOption('tie');
            updateWinnerOnScoreboard('tie');
        }

    }

}

function updateWinnerOnScoreboard(option) {

    //  Update Scoreboard based on Winner
    if (option === 'player1-win') {

        //  Increment Player 1 Score
        let spanPlayer1Score = document.getElementById('id-span-player-1-score');
        spanPlayer1Score.textContent = parseInt(spanPlayer1Score.textContent) + 1;

        //  Mark Player 1 as Winner
        document.getElementById('id-div-player-1-score').classList.add('text-green-500');

    } else if (option === 'player2-win') {

        //  Increment Player 2 Score
        let spanPlayer2Score = document.getElementById('id-span-player-2-score');
        spanPlayer2Score.textContent = parseInt(spanPlayer2Score.textContent) + 1;

        //  Mark Player 2 as Winner
        document.getElementById('id-div-player-2-score').classList.add('text-green-500');

    } else if (option === 'tie') {

        //  Increment Tie Score
        let spanTieScore = document.getElementById('id-span-tie-score');
        spanTieScore.textContent = parseInt(spanTieScore.textContent) + 1;

        //  Mark Tie as Active
        let divTieScore = document.getElementById('id-div-tie-score');
        divTieScore.classList.add('font-bold');
        divTieScore.classList.add('text-green-500');
        if (divTieScore.classList.contains('opacity-50')) divTieScore.classList.remove('opacity-50');

        //  Mark Player 1 as Inactive
        let divPlayer1Score = document.getElementById('id-div-player-1-score');
        if (divPlayer1Score.classList.contains('font-bold')) divPlayer1Score.classList.remove('font-bold');
        if (!divPlayer1Score.classList.contains('opacity-50')) divPlayer1Score.classList.add('opacity-50');

        //  Mark Player 2 as Inactive
        let divPlayer2Score = document.getElementById('id-div-player-2-score');
        if (divPlayer2Score.classList.contains('font-bold')) divPlayer2Score.classList.remove('font-bold');
        if (!divPlayer2Score.classList.contains('opacity-50')) divPlayer2Score.classList.add('opacity-50');

    }

}

function updatePlayerFocusOnScoreboard() {

    //  Mark Player 1 as Active
    document.getElementById('id-div-player-1-score').classList.toggle('font-bold');
    document.getElementById('id-div-player-1-score').classList.toggle('opacity-50');

    //  Mark Player 2 as Inactive
    document.getElementById('id-div-player-2-score').classList.toggle('font-bold');
    document.getElementById('id-div-player-2-score').classList.toggle('opacity-50');

    /*
        if (turn === 'player1-turn') {

            //  Mark Player 1 as Active
            document.getElementById('id-div-player-1-score').classList.toggle('font-bold');
            document.getElementById('id-div-player-1-score').classList.toggle('opacity-50');

            //  Mark Player 2 as Inactive
            document.getElementById('id-div-player-1-score').classList.toggle('font-bold');
            document.getElementById('id-div-player-2-score').classList.toggle('opacity-50');

        } else if (turn === 'player2-turn') {

            //  Mark Player 2 as Active
            document.getElementById('id-div-player-2-score').classList.add('font-bold');
            document.getElementById('id-div-player-2-score').classList.remove('opacity-50');

            //  Mark Player 1 & Tie as Inactive
            document.getElementById('id-div-player-1-score').classList.add('opacity-50');

        }
    */
}

function switchCurrentPlayer() {
    //  Toggle Current Player
    if (currentPlayer === player1) currentPlayer = player2;
    else if (currentPlayer === player2) currentPlayer = player1;
}

function checkWin() {

    winningCells = null;

    let cells = document.getElementsByClassName('data-cell');

    //  Check Rows for current player win
    for (let i = 0; i < 9; i += 3) {
        if (cells[i].textContent === currentPlayer.symbol &&
            cells[i + 1].textContent === currentPlayer.symbol &&
            cells[i + 2].textContent === currentPlayer.symbol) {
            winningCells = [cells[i], cells[i + 1], cells[i + 2]];
            break;
        }
    }

    //  Check Columns for current player win
    for (let i = 0; i < 3; i++) {
        if (cells[i].textContent === currentPlayer.symbol &&
            cells[i + 3].textContent === currentPlayer.symbol &&
            cells[i + 6].textContent === currentPlayer.symbol) {
            winningCells = [cells[i], cells[i + 3], cells[i + 6]];
            break;
        }
    }

    //  Check Diagonals for current player win
    if (cells[0].textContent === currentPlayer.symbol &&
        cells[4].textContent === currentPlayer.symbol &&
        cells[8].textContent === currentPlayer.symbol) {
        winningCells = [cells[0], cells[4], cells[8]];
    } else if (cells[2].textContent === currentPlayer.symbol &&
        cells[4].textContent === currentPlayer.symbol &&
        cells[6].textContent === currentPlayer.symbol) {
        winningCells = [cells[2], cells[4], cells[6]];
    }

    //  If current player has won, display win message and update end of game flag
    if (winningCells) gameStatus = 'win';

}

function checkTie() {

    let cells = document.getElementsByClassName('data-cell');
    for (let cell of cells) {
        //  If any cell is empty, game is not a tie yet
        if (cell.textContent === '') {
            gameStatus = 'ongoing';
            return;
        }
    }

    //  When all cells are filled and no player has won, it's a tie
    gameStatus = 'tie';

}

function restartGame() {

    //  Clear the gameBoard
    let cells = document.getElementsByClassName('data-cell');
    for (let cell of cells) {
        cell.textContent = '';
        cell.classList.remove('text-green-500');
    }

    gameStatus = 'ongoing';     //  Reset game status to ongoing
    switchCurrentPlayer();      //  Switch Current Player
    updateStatusMsgByOption(currentPlayer === player1 ? 'player1-turn' : 'player2-turn');

    resetScoreboardWinner();    //  Reset Scoreboard Winner Highlight
    resetScoreboardFocus();     //  Reset Scoreboard Focus

}

function resetScoreboardFocus() {

    let divPlayer1Score = document.getElementById('id-div-player-1-score');
    let divPlayer2Score = document.getElementById('id-div-player-2-score');

    if (currentPlayer === player1) {

        //  Mark Player 1 as Active
        if (!divPlayer1Score.classList.contains('font-bold')) divPlayer1Score.classList.add('font-bold');
        if (divPlayer1Score.classList.contains('opacity-50')) divPlayer1Score.classList.remove('opacity-50');

        //  Mark Player 2 as Inactive
        if (divPlayer2Score.classList.contains('font-bold')) divPlayer2Score.classList.remove('font-bold');
        if (!divPlayer2Score.classList.contains('opacity-50')) divPlayer2Score.classList.add('opacity-50');

    } else if (currentPlayer === player2) {

        //  Mark Player 2 as Active
        if (!divPlayer2Score.classList.contains('font-bold')) divPlayer2Score.classList.add('font-bold');
        if (divPlayer2Score.classList.contains('opacity-50')) divPlayer2Score.classList.remove('opacity-50');

        //  Mark Player 1 as Inactive
        if (divPlayer1Score.classList.contains('font-bold')) divPlayer1Score.classList.remove('font-bold');
        if (!divPlayer1Score.classList.contains('opacity-50')) divPlayer1Score.classList.add('opacity-50');

    }

    //  Mark Tie as Inactive
    document.getElementById('id-div-tie-score').classList.remove('font-bold');
    document.getElementById('id-div-tie-score').classList.add('opacity-50');

}

function resetScoreboardWinner() {

    //  Reset Scoreboard Winner Highlight
    document.getElementById('id-div-player-1-score').classList.remove('text-green-500');
    document.getElementById('id-div-player-2-score').classList.remove('text-green-500');
    document.getElementById('id-div-tie-score').classList.remove('text-green-500');

}

function resetGame() {

    restartGame();

    //  Reset Scoreboard
    document.getElementById('id-span-player-1-score').textContent = '0';
    document.getElementById('id-span-player-2-score').textContent = '0';
    document.getElementById('id-span-tie-score').textContent = '0';

}
