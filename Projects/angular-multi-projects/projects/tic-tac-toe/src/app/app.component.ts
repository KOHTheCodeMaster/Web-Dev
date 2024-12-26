import {Component} from '@angular/core';
import {TicTacToeGameComponent} from "./components/tic-tac-toe-game/tic-tac-toe-game.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TicTacToeGameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tic-tac-toe';
}
