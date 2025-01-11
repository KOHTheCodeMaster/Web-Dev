import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-track-it',
    standalone: true,
    imports: [
        RouterOutlet
    ],
    templateUrl: './track-it.component.html',
    styleUrl: './track-it.component.css'
})
export class TrackItComponent {

}
