import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ShoppingCartComponent} from "../shopping-cart/shopping-cart.component";
import {MyAccountComponent} from "./my-account/my-account.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, ShoppingCartComponent, MyAccountComponent],
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    constructor() {
    }

}
