import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../shared/model/user.model";
import {ShoppingCart} from "../shared/model/shopping-cart.model";
import {UserService} from "./user.service";
import {MultipleChargesModel} from "../shared/model/multiple-charges.model";
import {CartItem} from "../shared/model/cart-item.model";
import {Product} from "../shared/model/product.model";
import {ProductService} from "./product.service";
import {DataLoaderService} from "./data-loader.service";

@Injectable({
    providedIn: 'root'
})
export class ShoppingCartService {

    private readonly KEY_USER_SHOPPING_CARTS = 'USER_SHOPPING_CARTS';
    private shoppingCart$: BehaviorSubject<ShoppingCart>;
    private userIdToShoppingCartMap: Map<number, ShoppingCart> = new Map();
    private cartVisibility$: BehaviorSubject<boolean>;

    constructor(private userService: UserService,
                private dataLoaderService: DataLoaderService,
                private productService: ProductService) {

        this.shoppingCart$ = new BehaviorSubject(new ShoppingCart(new MultipleChargesModel()));

        //  Initialize cart visibility to false
        this.cartVisibility$ = new BehaviorSubject<boolean>(false);

        //  Initialize user shopping carts from local storage
        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {

            //  Initialize Product List
            if (dataLoaded) {
                this.initUserShoppingCartsFromLocalStorage();

                //  Initialize subscription for user changes to update the shopping cart
                this.initSubscriptions();
            }
        });

    }

    private initUserShoppingCartsFromLocalStorage() {

        //  Clear any existing user shopping carts
        this.userIdToShoppingCartMap.clear();

        //  Initialize the shopping carts for each user from local storage
        const storedCarts = localStorage.getItem(this.KEY_USER_SHOPPING_CARTS);

        if (storedCarts && storedCarts.length > 0) {

            const cartsData = JSON.parse(storedCarts);

            for (const userId in cartsData) {
                if (cartsData.hasOwnProperty(userId)) {

                    const cartData = cartsData[userId];
                    const cartItems: CartItem[] = cartData.cartItems.map((item: any) => {
                        let product: Product | null = this.productService.findProductById(item['product']['id']);
                        if (!product) {
                            //  If product is not found, log an error and return a null CartItem
                            console.error(`Product with ID ${item.productId} not found for user ${userId}.`);
                            return null;
                        }
                        return new CartItem(product, item.quantity);
                    });

                    const shoppingCart = new ShoppingCart(new MultipleChargesModel(), cartItems);

                    this.userIdToShoppingCartMap.set(Number(userId), shoppingCart);
                }
            }
        } else {
            //  If no carts are found in local storage, Store an empty object to avoid issues with JSON parsing later
            localStorage.setItem(this.KEY_USER_SHOPPING_CARTS, JSON.stringify(Object.fromEntries(this.userIdToShoppingCartMap), null, 2));
        }

        //  Initialize the shopping cart for the current logged-in user
        const loggedInUser = this.userService.getLoggedInUser();
        const cart = this.userIdToShoppingCartMap.get(loggedInUser.getId());
        if (cart) this.shoppingCart$.next(cart);
        // else console.log('No ShoppingCart found for the logged-in user:', loggedInUser.getUsername());

    }

    initSubscriptions() {

        //  When logged-in user changes, update the shopping cart
        this.userService.getLoggedInUser$().subscribe((user: User) => {

            //  If the shopping cart does not exist for the user, create a new one
            if (!this.userIdToShoppingCartMap.has(user.getId())) {
                // console.log('Creating new shopping cart for user:', user.getUsername());
                this.userIdToShoppingCartMap.set(user.getId(), new ShoppingCart(new MultipleChargesModel()));
                localStorage.setItem(this.KEY_USER_SHOPPING_CARTS, JSON.stringify(Object.fromEntries(this.userIdToShoppingCartMap), null, 2));
            }

            //  If the shopping cart for the new logged-in user is different from the current one, then update it
            if (this.userIdToShoppingCartMap.get(user.getId()) !== this.shoppingCart$.getValue()) {
                // console.log('Updating shopping cart for user:', user.getUsername());
                this.shoppingCart$.next(this.userIdToShoppingCartMap.get(user.getId())!);
            }

        });
    }

    updateShoppingCartVisibility(visible: boolean) {
        this.cartVisibility$.next(visible);
    }

    /*
        updateShoppingCart(shoppingCart: ShoppingCart) {
            this.shoppingCart$.next(shoppingCart);
        }
    */

    resetShoppingCart(): void {
        const emptyCart = new ShoppingCart(new MultipleChargesModel());
        this.shoppingCart$.next(emptyCart);
        this.cartVisibility$.next(false);

        //  Update the user shopping carts in local storage
        this.persistUserShoppingCartsInLocalStorage(emptyCart);
    }

    persistUserShoppingCartsInLocalStorage(shoppingCart: ShoppingCart) {
        const loggedInUser = this.userService.getLoggedInUser();
        if (!loggedInUser) {
            console.error('No user is logged in to update the shopping cart.');
            return;
        }

        //  Update the shopping cart for the logged-in user
        this.userIdToShoppingCartMap.set(loggedInUser.getId(), shoppingCart);

        //  Save the updated user shopping carts to local storage
        localStorage.setItem(this.KEY_USER_SHOPPING_CARTS, JSON.stringify(Object.fromEntries(this.userIdToShoppingCartMap), null, 2));

        // console.log('Updated user shopping carts in local storage:', JSON.stringify(Object.fromEntries(this.userIdToShoppingCartMap), null, 2));
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
