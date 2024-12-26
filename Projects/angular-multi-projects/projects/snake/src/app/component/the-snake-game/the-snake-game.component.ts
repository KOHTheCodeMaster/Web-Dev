import {Component} from '@angular/core';
import {ScoreboardComponent} from "./scoreboard/scoreboard.component";
import {GameBoardComponent} from "./game-board/game-board.component";

@Component({
  selector: 'app-the-snake-game',
  standalone: true,
    imports: [
        ScoreboardComponent,
        GameBoardComponent
    ],
  templateUrl: './the-snake-game.component.html',
  styleUrl: './the-snake-game.component.css'
})
export class TheSnakeGameComponent {

}
