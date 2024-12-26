import {Component} from '@angular/core';
import {TheSnakeGameComponent} from "./component/the-snake-game/the-snake-game.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        TheSnakeGameComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'snake';
}
