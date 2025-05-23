import {Injectable} from '@angular/core';
import {ShoppingCartService} from "./shopping-cart.service";
import {OrderService} from "./order.service";
import {ShoppingCart} from "../shared/model/shopping-cart.model";
import {AddressService} from "./address.service";
import {Address} from "../shared/model/address.model";
import {Order} from "../shared/model/order.model";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class CheckoutService {

    constructor(private shoppingCartService: ShoppingCartService,
                private addressService: AddressService,
                private orderService: OrderService,
                private router: Router) {

    }

    checkout() {

        let shoppingCart: ShoppingCart = this.shoppingCartService.getShoppingCart();
        let selectedAddress: Address = this.addressService.getSelectedAddress$().getValue();
        let newOrder: Order = this.orderService.createNewOrder(shoppingCart, selectedAddress);

        //  Clear the shopping cart
        this.shoppingCartService.createNewEmptyShoppingCart();

        //  Redirect to `/orders/orderNumber` page
        // this.router.navigate(['/orders', newOrder.getOrderNumber()]);
        this.router.navigateByUrl('/orders/' + newOrder.getOrderNumber());

    }


    //  Getters
    //  -------


}
