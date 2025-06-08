import {Injectable} from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";
import {OrderService} from "./order.service";
import {ShoppingCart} from "../shared/model/shopping-cart.model";
import {AddressService} from "./address.service";
import {Address} from "../shared/model/address.model";
import {Order} from "../shared/model/order.model";
import {Router} from "@angular/router";
import {MultipleChargesManagerService} from "./multiple-charges-manager.service";

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {

    constructor(private shoppingCartService: ShoppingCartService,
                private addressService: AddressService,
                private orderService: OrderService,
                private multipleChargesManagerService: MultipleChargesManagerService,
                private router: Router) {

    }

    checkout() {

        let shoppingCart: ShoppingCart = this.shoppingCartService.getShoppingCart$().getValue();
        let selectedAddress: Address | null = this.addressService.getSelectedAddress$().getValue();
        if (!selectedAddress) {
            console.warn('Checkout failed. No address selected.');
            //  ToDo: Handle this scenario gracefully with validations to ensure this case never occurs.
            return;
        }
        let newOrder: Order | null = this.orderService.createNewOrder(shoppingCart, selectedAddress);

        //  Reset the shopping cart to new empty shopping cart
        this.shoppingCartService.resetShoppingCart();

        //  Redirect to `/orders/orderNumber` page
        this.router.navigateByUrl('/orders/' + newOrder?.getOrderNumber());

    }

}
