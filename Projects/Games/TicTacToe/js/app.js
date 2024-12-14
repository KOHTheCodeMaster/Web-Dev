let player1, player2, currentPlayer;
let divStatusMsg;
let gameStatus = 'ongoing';

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

    divStatusMsg = document.getElementById('id-status-msg');
    updateStatusMsgByOption();

    cells = document.getElementsByClassName('data-cell');
    for (let cell of cells) cell.addEventListener('click', cellClick);

}

function updateStatusMsgByOption(option) {

    if (option === 'player1') divStatusMsg.textContent = 'Turn: Player 1 (X)';
    else if (option === 'player2') divStatusMsg.textContent = 'Turn: Player 2 (O)';
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

        //  Check if current player has won
        checkWin();

        //  If current player has not won, check if game is a tie
        if (gameStatus !== 'win') checkTie();

        //  Check if by filling the current cell, current player has won or game is a tie
        if (gameStatus === 'win') {

            //  Update Scoreboard & Status Message based on Winner
            if (currentPlayer === player1) {
                let spanPlayer1Score = document.getElementById('id-span-player-1-score');
                spanPlayer1Score.textContent = parseInt(spanPlayer1Score.textContent) + 1;
                updateStatusMsgByOption('player1-win');

                //  ToDo:
                //  Highlight the Winner on Scoreboard
                // let divPlayer1Score = document.getElementById('id-div-player-1-score');
                // divPlayer1Score.classList.toggle('bg-green-500');

            } else {
                let spanPlayer2Score = document.getElementById('id-span-player-2-score');
                spanPlayer2Score.textContent = parseInt(spanPlayer2Score.textContent) + 1;
                updateStatusMsgByOption('player2-win');

                //  ToDo:
                //  Highlight the Winner on Scoreboard
                // let divPlayer2Score = document.getElementById('id-div-player-2-score');
                // divPlayer2Score.classList.toggle('bg-red-500');
            }

            //  ToDo:
            //  Highlight the Winning Combination on the Board

        } else if (gameStatus === 'tie') {

            //  Update Scoreboard & Status Message based on Tie
            let spanTieScore = document.getElementById('id-span-tie-score');
            spanTieScore.textContent = parseInt(spanTieScore.textContent) + 1;
            updateStatusMsgByOption('tie');

            // let divTieScore = document.getElementById('id-div-tie-score');
            // divTieScore.style.backgroundColor = 'yellow';

        } else switchCurrentPlayer();

    }

}

function switchCurrentPlayer() {
    //  Toggle Current Player
    if (currentPlayer === player1) currentPlayer = player2;
    else currentPlayer = player1;

    //  Update Status Message to show current player's turn
    updateStatusMsgByOption(currentPlayer === player1 ? 'player1' : 'player2');
}

function checkWin() {

    let win = false;
    let cells = document.getElementsByClassName('data-cell');

    //  Check Rows for current player win
    for (let i = 0; i < 9; i += 3) {
        if (cells[i].textContent === currentPlayer.symbol &&
            cells[i + 1].textContent === currentPlayer.symbol &&
            cells[i + 2].textContent === currentPlayer.symbol) {
            win = true;
            break;
        }
    }

    //  Check Columns for current player win
    for (let i = 0; i < 3; i++) {
        if (cells[i].textContent === currentPlayer.symbol &&
            cells[i + 3].textContent === currentPlayer.symbol &&
            cells[i + 6].textContent === currentPlayer.symbol) {
            win = true;
            break;
        }
    }

    //  Check Diagonals for current player win
    if (cells[0].textContent === currentPlayer.symbol &&
        cells[4].textContent === currentPlayer.symbol &&
        cells[8].textContent === currentPlayer.symbol) {
        win = true;
    } else if (cells[2].textContent === currentPlayer.symbol &&
        cells[4].textContent === currentPlayer.symbol &&
        cells[6].textContent === currentPlayer.symbol) {
        win = true;
    }

    //  If current player has won, display win message and update end of game flag
    if (win) gameStatus = 'win';

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

    //  Clear the board
    let cells = document.getElementsByClassName('data-cell');
    for (let cell of cells) cell.textContent = '';

    gameStatus = 'ongoing';     //  Reset game status to ongoing
    updateStatusMsgByOption();  //  Reset status message

}

function resetGame() {

    restartGame();

    //  Reset Scoreboard
    document.getElementById('id-span-player-1-score').textContent = '0';
    document.getElementById('id-span-player-2-score').textContent = '0';
    document.getElementById('id-span-tie-score').textContent = '0';

}
