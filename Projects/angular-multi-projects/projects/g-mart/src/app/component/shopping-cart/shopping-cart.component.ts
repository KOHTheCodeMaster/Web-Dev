import {Component} from '@angular/core';
import {ShoppingCart} from '../../shared/model/shopping-cart.model';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {NgClass, NgFor, NgIf} from '@angular/common';
import {CartItem} from '../../shared/model/cart-item.model';
import {InfoPopupHostComponent} from "../info-popup-host/info-popup-host.component";
import {InfoPopupService} from "../../service/info-popup.service";
import {InfoPopupType} from "../../shared/model/InfoPopupType";

@Component({
    selector: 'app-shopping-cart',
    standalone: true,
    imports: [NgIf, NgFor, NgClass, InfoPopupHostComponent],
    templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {

    protected readonly InfoPopupType = InfoPopupType;
    isShoppingCartOpen = false;
    shoppingCart: ShoppingCart;

    isSubtotalDropdownOpen = false;

    constructor(private shoppingCartService: ShoppingCartService,
                private infoPopupHostService: InfoPopupService) {
        this.shoppingCartService.getCartVisibility$().subscribe(visible => this.isShoppingCartOpen = visible);
        this.shoppingCart = this.shoppingCartService.getShoppingCart();
    }

    openShoppingCart() {
        this.shoppingCartService.updateShoppingCartVisibility(true);
    }

    closeShoppingCart() {
        this.shoppingCartService.updateShoppingCartVisibility(false);
        this.isShoppingCartOpen = false;
    }

    toggleShoppingCart() {
        this.isShoppingCartOpen = !this.isShoppingCartOpen;
        console.log(`Shopping cart is ${this.isShoppingCartOpen ? 'open' : 'closed'}`);
    }

    decrementQuantity(cartItem: CartItem) {
        //  Remove item from cart if quantity is 1, otherwise decrement quantity
        if (cartItem.getQuantity() === 1) this.shoppingCart.removeCartItem(cartItem);
        else if (cartItem.getQuantity() > 1) this.shoppingCart.decrementCartItem(cartItem);
    }

    incrementQuantity(cartItem: CartItem) {
        this.shoppingCart.incrementCartItem(cartItem); // Assuming this method handles stock checks
    }

    openInfoPopup(infoPopupType: InfoPopupType) {
        this.infoPopupHostService.openPopup(infoPopupType);
    }

/*
    closeInfoPopupForDeliveryCharge() {
        this.infoPopupHostService.closePopup();
    }
*/

    toggleSubtotalDropdown() {
        this.isSubtotalDropdownOpen = !this.isSubtotalDropdownOpen;
    }

}
