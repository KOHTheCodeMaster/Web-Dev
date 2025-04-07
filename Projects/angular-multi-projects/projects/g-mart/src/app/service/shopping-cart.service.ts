import {Injectable} from '@angular/core';
import {ShoppingCart} from "../shared/model/shopping-cart.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    private shoppingCart: ShoppingCart;

    constructor() {
        this.shoppingCart = new ShoppingCart();     //  Initialize empty shopping cart
    }


    //  Getters
    //  -------

    public getShoppingCart(): ShoppingCart {
        return this.shoppingCart;
    }


}
