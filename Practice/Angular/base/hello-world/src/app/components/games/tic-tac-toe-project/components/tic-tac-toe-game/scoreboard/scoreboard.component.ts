import {Component} from '@angular/core';
import {GameStateService} from "../../../services/game-state.service";
import {Player} from "../../../shared/model/player.model";
import {SettingsComponent} from "../settings/settings.component";
import {GameStatus} from "../../../shared/model/game-status.enum";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-scoreboard',
  standalone: true,
    imports: [
        SettingsComponent,
        NgClass
    ],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {

    protected readonly GameStatus = GameStatus;
    gameStatus: GameStatus;
    player1: Player;
    player2: Player;
    tieScore: number;

    constructor(public gameStateService: GameStateService) {
        this.gameStatus = GameStatus.IN_PROGRESS;
        this.player1 = this.gameStateService.getPlayerList()[0];
        this.player2 = this.gameStateService.getPlayerList()[1];
        this.tieScore = this.gameStateService.getTieScore();
    }

    ngOnInit(): void {
        this.gameStateService.getGameStatus$().subscribe(status => {
            this.gameStatus = status;
        });
    }

}
