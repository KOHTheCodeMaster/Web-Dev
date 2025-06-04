import {Component} from '@angular/core';
import {ShoppingCart} from '../../shared/model/shopping-cart.model';
import {ShoppingCartService} from '../../service/shopping-cart.service';
import {NgClass, NgFor, NgIf} from '@angular/common';
import {CartItem} from '../../shared/model/cart-item.model';
import {InfoPopupHostComponent} from "../info-popup-host/info-popup-host.component";
import {InfoPopupService} from "../../service/info-popup.service";
import {InfoPopupType} from "../../shared/model/InfoPopupType";
import {FormsModule} from "@angular/forms";
import {MultipleChargesModel} from "../../shared/model/multiple-charges.model";
import {CheckoutService} from "../../service/checkout.service";

@Component({
    selector: 'app-shopping-cart',
    standalone: true,
    imports: [NgIf, NgFor, NgClass, InfoPopupHostComponent, FormsModule],
    templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent {

    protected readonly MultipleChargesModel = MultipleChargesModel;
    protected readonly InfoPopupType = InfoPopupType;
    protected readonly Math = Math;

    isShoppingCartOpen = false;
    shoppingCart!: ShoppingCart;

    isFeedingIndiaChecked = false;
    isSubtotalDropdownOpen = false;
    isCustomTipOpened: boolean = false;
    customTipValue: number = 0;

    constructor(private shoppingCartService: ShoppingCartService,
                private infoPopupHostService: InfoPopupService,
                private checkoutService: CheckoutService) {

        this.shoppingCartService.getCartVisibility$().subscribe(visible => this.isShoppingCartOpen = visible);

        this.shoppingCartService.getShoppingCart$().subscribe(shoppingCart => this.shoppingCart = shoppingCart);

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
        // console.log(`Shopping cart is ${this.isShoppingCartOpen ? 'open' : 'closed'}`);
    }

    decrementQuantity(cartItem: CartItem) {
        //  Remove item from cart if quantity is 1, otherwise decrement quantity
        if (cartItem.getQuantity() === 1) this.shoppingCart.removeCartItem(cartItem);
        else if (cartItem.getQuantity() > 1) this.shoppingCart.decrementCartItem(cartItem);

        if (this.shoppingCart.getItemCount() === 0) this.closeShoppingCart();

        //  Update local storage to persist cart state
        this.shoppingCartService.persistUserShoppingCartsInLocalStorage(this.shoppingCart);
    }

    incrementQuantity(cartItem: CartItem) {
        cartItem.incrementQuantity();
        this.shoppingCart.incrementCartItem(cartItem); // Assuming this method handles stock checks

        //  Update local storage to persist cart state
        this.shoppingCartService.persistUserShoppingCartsInLocalStorage(this.shoppingCart);
    }

    openInfoPopup(infoPopupType: InfoPopupType) {
        this.infoPopupHostService.openPopup(infoPopupType);
    }

    toggleSubtotalDropdown() {
        this.isSubtotalDropdownOpen = !this.isSubtotalDropdownOpen;
    }

    toggleFeedingIndiaDonation($event: MouseEvent) {
        this.isFeedingIndiaChecked = ($event.target as HTMLInputElement).checked;
        this.shoppingCart.toggleFeedIndiaDonation(this.isFeedingIndiaChecked);
    }

    addTip(tipAmount: number) {
        this.shoppingCart.setTipAmount(Math.floor(tipAmount));  //  ToDo: Refactor setTipAmount from cart to MCM
        this.shoppingCart.getMultipleChargesModel().setIsTipApplied(tipAmount !== 0);
        this.shoppingCart.reCalcTotalPrice();
        this.isCustomTipOpened = false; // Close custom tip input after adding
    }

    checkIsCustomTipApplied() {
        return this.shoppingCart.getTipAmount() > 0 &&
            this.shoppingCart.getTipAmount() !== 20 &&
            this.shoppingCart.getTipAmount() !== 30 &&
            this.shoppingCart.getTipAmount() !== 50;
    }

    proceedToPay() {
        if (this.shoppingCart.getItemCount() === 0) {
            console.log("L0G - Error - Shopping cart is empty.");
            return;
        }

        this.checkoutService.checkout();
        this.closeShoppingCart();
    }

}
