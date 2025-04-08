import {CartItem} from "./cart-item.model";

export class ShoppingCart {

    // private static lastCartId: number = 1;
    // private id: number;
    private cartItems: CartItem[] = [];
    private itemCount: number = 0;
    private totalPrice: number = 0;

    constructor(cartItems?: CartItem[], itemCount?: number, totalPrice?: number) {
        this.cartItems = cartItems ? cartItems : [];        //  default to empty array if not provided
        this.itemCount = itemCount ? itemCount : 0;            //  default to 0 if not provided
        this.totalPrice = totalPrice ? totalPrice : 0;      //  default to 0 if not provided
    }

    getCartItemByProductId(id: number) {
        return this.cartItems.find(cartItem => cartItem.getProduct().getId() === id);
    }

    addCartItem(cartItem: CartItem) {
        cartItem.incrementQuantity();
        this.cartItems.push(cartItem);
        this.itemCount += 1;
        this.totalPrice += cartItem.getProduct().getPrice();
    }

/*
    updateCartItem(cartItem: CartItem) {
        const index = this.cartItems.indexOf(cartItem);
        if (index > -1) {
            this.cartItems[index] = cartItem;
            this.itemCount = this.cartItems.reduce((acc, item) => acc + item.getQuantity(), 0);
            this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.getSubTotalPrice(), 0);
        } else console.log("L0G - Error - Cart item not found in shopping cart.\nCartItem: ", cartItem);
    }
*/

    incrementCartItem(cartItem: CartItem) {
        cartItem.incrementQuantity();
        this.itemCount += 1;
        this.totalPrice += cartItem.getProduct().getPrice();
    }

    decrementCartItem(cartItem: CartItem) {
        this.itemCount -= 1;
        this.totalPrice -= cartItem.getProduct().getPrice();
        cartItem.decrementQuantity();
    }

    removeCartItem(cartItem: CartItem) {
        const index = this.cartItems.indexOf(cartItem);
        if (index > -1) {
            this.cartItems.splice(index, 1);
            this.itemCount -= 1;
            this.totalPrice -= cartItem.getProduct().getPrice();
            cartItem.decrementQuantity();
        } else console.log("L0G - Error - Cart item not found in shopping cart.\nCartItem: ", cartItem);
    }

    clearCart() {
        this.cartItems = [];
        this.itemCount = 0;
        this.totalPrice = 0;
    }


    //  Getters & Setters
    //  -----------------

    public getCartItems(): CartItem[] {
        return this.cartItems;
    }

    public setCartItems(cartItems: CartItem[]): void {
        this.cartItems = cartItems;
    }

    public getItemCount(): number {
        return this.itemCount;
    }

    public setItemCount(itemCount: number): void {
        this.itemCount = itemCount;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

}
