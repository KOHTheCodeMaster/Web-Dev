import {Component} from '@angular/core';
import {Level} from "../../../shared/model/level.enum";
import {GameStateService} from "../../../service/game-state.service";
import {GameStatus} from "../../../shared/model/game-status.enum";

@Component({
  selector: 'app-choose-level',
  standalone: true,
  imports: [],
  templateUrl: './choose-level.component.html',
  styleUrl: './choose-level.component.css'
})
export class ChooseLevelComponent {

    protected readonly Level = Level;

    gameStatus!: GameStatus;

    constructor(private gameStateService: GameStateService) {
        this.gameStateService.getGameStatus().subscribe(gameStatus => {
            this.gameStatus = gameStatus;
        });
    }

    onLevelChange(level: Level) {
        this.gameStateService.updateLevel(level);
        // this.gameStateService.updateGameStatus(GameStatus.LOADING);
        this.gameStateService.updateGameStatus(GameStatus.IN_PROGRESS);
    }

}
