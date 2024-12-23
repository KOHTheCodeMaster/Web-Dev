import {Player} from '../model/player.model';
import {TicTacToeSymbol} from "../model/tic-tac-toe-symbol";

export class PlayerHelper {

    static initializePlayers(): Player[] {

        let player1 = PlayerHelper.createNewPlayer('1', 'Player 1', TicTacToeSymbol.X);
        player1.updateTurn(true);

        let player2 = PlayerHelper.createNewPlayer('2', 'Player 2', TicTacToeSymbol.O);
        return [player1, player2];
    }

    static createNewPlayer(id: string, name: string, symbol: TicTacToeSymbol): Player {
        return new Player(id, name, symbol);
    }

}
