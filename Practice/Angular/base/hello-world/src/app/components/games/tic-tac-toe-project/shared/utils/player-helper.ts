import {Player} from '../model/player.model';
import {TicTacToeSymbol} from "../model/tic-tac-toe-symbol";

export class PlayerHelper {

    static initializePlayers(): Player[] {
        return [
            PlayerHelper.createNewPlayer('1', 'Player 1', TicTacToeSymbol.X),
            PlayerHelper.createNewPlayer('2', 'Player 2', TicTacToeSymbol.O)
        ];
    }

    static createNewPlayer(id: string, name: string, symbol: TicTacToeSymbol): Player {
        return new Player(id, name, symbol);
    }

}
