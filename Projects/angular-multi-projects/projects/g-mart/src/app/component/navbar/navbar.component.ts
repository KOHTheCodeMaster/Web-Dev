import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ShoppingCart} from "../../shared/model/shopping-cart.model";
import {ShoppingCartService} from "../../service/shopping-cart.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        RouterLink,
        NgIf
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

    shoppingCart: ShoppingCart;

    constructor(private shoppingCartService: ShoppingCartService) {
        this.shoppingCart = this.shoppingCartService.getShoppingCart();
    }

    openShoppingCart() {

    }

}
