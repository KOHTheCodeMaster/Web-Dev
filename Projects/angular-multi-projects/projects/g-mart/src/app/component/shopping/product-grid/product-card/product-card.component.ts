import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Product} from "../../../../shared/model/product.model";
import {CartItem} from "../../../../shared/model/cart-item.model";
import {ShoppingCartService} from "../../../../service/shopping-cart.service";
import {ShoppingCart} from "../../../../shared/model/shopping-cart.model";
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [CurrencyPipe, NgIf],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnChanges {

    @Input({required: true}) product!: Product;
    cartItem!: CartItem;
    shoppingCart!: ShoppingCart;

    constructor(private shoppingCartService: ShoppingCartService) {
        this.shoppingCartService.getShoppingCart$().subscribe(shoppingCart => this.shoppingCart = shoppingCart);
    }

    ngOnChanges(changes: SimpleChanges) {
        //  ToDo: Need to understand the reason for why this method is required?
        if (changes['product'] && this.product) {
            // let shoppingCart = this.shoppingCartService.getShoppingCart();
            let cartItem = this.shoppingCart.getCartItemByProductId(this.product.getId());
            this.cartItem = cartItem ? cartItem : new CartItem(this.product, 0);
        }
    }

    addToCart() {
        this.cartItem.incrementQuantity();
        this.shoppingCart.addCartItem(this.cartItem);
    }

    incrementQuantity() {
        this.cartItem.incrementQuantity();
        this.shoppingCart.incrementCartItem(this.cartItem);
    }

    decrementQuantity() {
        //  Remove item from cart if quantity is 1, otherwise decrement quantity
        if (this.cartItem.getQuantity() === 1) this.shoppingCart.removeCartItem(this.cartItem);
        else if (this.cartItem.getQuantity() > 1) this.shoppingCart.decrementCartItem(this.cartItem);
    }

}
