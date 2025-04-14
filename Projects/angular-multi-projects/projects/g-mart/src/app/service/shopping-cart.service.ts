import {Injectable} from '@angular/core';
import {ShoppingCart} from "../shared/model/shopping-cart.model";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    private shoppingCart: ShoppingCart;
    private cartVisibility$: BehaviorSubject<boolean>;

    constructor() {
        this.shoppingCart = new ShoppingCart();     //  Initialize empty shopping cart
        this.cartVisibility$ = new BehaviorSubject<boolean>(false);   //  Initialize cart visibility to false
    }

    updateShoppingCartVisibility(visible: boolean) {
        this.cartVisibility$.next(visible);
    }

    //  Getters
    //  -------

    public getShoppingCart(): ShoppingCart {
        return this.shoppingCart;
    }

    public getCartVisibility$(): Observable<boolean> {
        return this.cartVisibility$.asObservable();
    }

}
