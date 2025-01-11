import {Component} from '@angular/core';
import {TrackItComponent} from "./components/track-it/track-it.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        TrackItComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'track-it';
}
