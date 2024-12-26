import {Component} from '@angular/core';
import {ScoreboardComponent} from "./scoreboard/scoreboard.component";
import {ChooseLevelComponent} from "./choose-level/choose-level.component";
import {GameStateService} from "../../service/game-state.service";
import {GameStatus} from "../../shared/model/game-status.enum";
import {NgIf} from "@angular/common";
import {GameBoardComponent} from "./game-board/game-board.component";

@Component({
    selector: 'app-the-snake-game',
    standalone: true,
    imports: [
        ScoreboardComponent,
        ChooseLevelComponent,
        NgIf,
        GameBoardComponent
    ],
    templateUrl: './the-snake-game.component.html',
})
export class TheSnakeGameComponent {

    gameStatus!: GameStatus;

    constructor(gameStateService: GameStateService) {

        gameStateService.getGameStatus().subscribe(gameStatus => {
            this.gameStatus = gameStatus;
        });

    }

    protected readonly GameStatus = GameStatus;
}
