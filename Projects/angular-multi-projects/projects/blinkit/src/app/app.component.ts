import {Component} from '@angular/core';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {ShoppingComponent} from "./component/shopping/shopping.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        NavbarComponent,
        ShoppingComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Blinkit';
}
