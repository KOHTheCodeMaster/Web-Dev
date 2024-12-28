import {Component} from '@angular/core';
import {GameStateService} from "../../../service/game-state.service";
import {Level} from "../../../shared/model/level.enum";
import {ScoreService} from "../../../service/score.service";
import {GameStatus} from "../../../shared/model/game-status.enum";

@Component({
    selector: 'app-scoreboard',
    standalone: true,
    imports: [],
    templateUrl: './scoreboard.component.html',
    styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {

    protected readonly Level = Level;
    level!: Level;
    currentScore!: number;
    highScore!: number;

    constructor(private gameStateService: GameStateService, private scoreService: ScoreService) {

        this.gameStateService.getLevel().subscribe(level => this.level = level);

        this.scoreService.getScoreUpdated$().subscribe(() => this.updateScores());

        this.gameStateService.getGameStatus$().subscribe(gameStatus => {
            if (gameStatus === GameStatus.SELECT_LEVEL) this.scoreService.resetCurrentScore();
        });

    }

    updateScores() {
        this.currentScore = this.scoreService.getCurrentScore();
        this.highScore = this.scoreService.getHighScore();
    }

}
