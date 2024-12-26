import {Component} from '@angular/core';
import {GameStateService} from "../../../service/game-state.service";
import {Level} from "../../../shared/model/level.enum";
import {ScoreService} from "../../../service/score.service";

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
    currentScore: number = 0;
    highScore: number = 0;

    constructor(private gameStateService: GameStateService, private scoreService: ScoreService) {

        this.gameStateService.getLevel().subscribe(level => {
            this.level = level;
        });

        this.scoreService.getCurrentScore$().subscribe(score => {
            this.currentScore = score;
        });

        this.scoreService.getHighScore$().subscribe(score => {
            this.highScore = score;
        });

    }

}
