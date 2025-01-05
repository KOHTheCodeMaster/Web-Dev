import {Component} from '@angular/core';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        NavbarComponent,
        RouterOutlet
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Blinkit';
}
