import {Component} from '@angular/core';
import {
    TicTacToeGameComponent
} from "./components/games/tic-tac-toe-project/components/tic-tac-toe-game/tic-tac-toe-game.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [TicTacToeGameComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title: string = 'Frontend-Web-Dev';
}
