import {Component} from '@angular/core';
import {GameStateService} from "../../../service/game-state.service";
import {GameStatus} from "../../../shared/model/game-status.enum";

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css'
})
export class GameOverComponent {

    strText: string;

    constructor(private gameStateService: GameStateService) {
        this.strText = "Game Over!";
    }

    handleGameOverBtnClick() {
        this.gameStateService.updateGameStatus(GameStatus.SELECT_LEVEL);
    }

}
