import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, ShoppingCartComponent],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    constructor() {
    }

}
