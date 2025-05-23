import {Injectable} from '@angular/core';
import {ShoppingCart} from "../shared/model/shopping-cart.model";
import {BehaviorSubject, Observable} from "rxjs";
import {MultipleChargesManagerService} from "./multiple-charges-manager.service";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    private readonly shoppingCart$: BehaviorSubject<ShoppingCart>;
    private cartVisibility$: BehaviorSubject<boolean>;

    constructor(private multipleShoppingCartService: MultipleChargesManagerService) {
        //  Initialize empty shopping cart
        this.shoppingCart$ = new BehaviorSubject(new ShoppingCart(multipleShoppingCartService.getMultipleChargesModel()));

        //  Initialize cart visibility to false
        this.cartVisibility$ = new BehaviorSubject<boolean>(false);
    }

    updateShoppingCartVisibility(visible: boolean) {
        this.cartVisibility$.next(visible);
    }

    updateShoppingCart(shoppingCart: ShoppingCart) {
        this.shoppingCart$.next(shoppingCart);
    }


    //  Getters
    //  -------

    public getShoppingCart$(): BehaviorSubject<ShoppingCart> {
        return this.shoppingCart$;
    }

    public getCartVisibility$(): Observable<boolean> {
        return this.cartVisibility$.asObservable();
    }

}
