import {Injectable} from '@angular/core';
import {UserService} from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    // private userCartList: UserCart[];
    // private cartIdCounter: number = 1;
    // private strKeyShoppingCart: string = 'shopping-cart';
    // private userCartUpdated$!: Subject<UserCart[]>;

    constructor(private userService: UserService) {

/*
        this.userCartList = this.loadStoredCartsFromLocalStorage();
        this.cartIdCounter = this.initializeCartIdCounter();
        this.userCartUpdated$ = new Subject<UserCart[]>();
*/

    }

/*
    loadStoredCartsFromLocalStorage() {

        //  Load the stored carts for all users from local storage
        let storedCarts: string | null = localStorage.getItem(this.strKeyShoppingCart);

        //  If storedCarts is null, initialize the local storage with an empty cart for the guest user
        if (storedCarts) return JSON.parse(storedCarts);
        else {
            //  Create an empty cart for the guest user and store it in local storage
            let emptyUserCartList = [this.createEmptyUserCartForCurrentUser()];
            localStorage.setItem(this.strKeyShoppingCart, JSON.stringify(emptyUserCartList));
            return emptyUserCartList;
        }

    }

    private initializeCartIdCounter() {
        let maxId: number = 0;
        this.userCartList.forEach(cart => maxId = Math.max(maxId, cart.id));
        return maxId + 1;
    }

    private createEmptyUserCartForCurrentUser(): UserCart {
        return {
            id: this.cartIdCounter++,
            user: this.userService.getCurrentUser(),
            products: [],
            totalPrice: 0,
            totalQty: 0
        };
    }
*/


    //  Getters
    //  -------

/*
    public getUserCartUpdated$(): Observable<UserCart[]> {
        return this.userCartUpdated$.asObservable();
    }
*/


}
