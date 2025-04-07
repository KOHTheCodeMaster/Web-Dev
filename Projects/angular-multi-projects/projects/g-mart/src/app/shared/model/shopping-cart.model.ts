import {CartItem} from "./cart-item.model";

export class ShoppingCart {

    // private static lastCartId: number = 1;
    // private id: number;
    private cartItems: CartItem[] = [];
    private totalQty: number = 0;
    private totalPrice: number = 0;

    constructor(cartItems?: CartItem[], totalQty?: number, totalPrice?: number) {
        this.cartItems = cartItems ? cartItems : [];        //  default to empty array if not provided
        this.totalQty = totalQty ? totalQty : 0;            //  default to 0 if not provided
        this.totalPrice = totalPrice ? totalPrice : 0;      //  default to 0 if not provided
    }

    getCartItemByProductId(id: number) {
        return this.cartItems.find(cartItem => cartItem.getProduct().getId() === id);
    }


    //  Getters & Setters
    //  -----------------

    public getCartItems(): CartItem[] {
        return this.cartItems;
    }

    public setCartItems(cartItems: CartItem[]): void {
        this.cartItems = cartItems;
    }

    public getTotalQty(): number {
        return this.totalQty;
    }

    public setTotalQty(totalQty: number): void {
        this.totalQty = totalQty;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

    addCartItem(cartItem: CartItem) {
        this.cartItems.push(cartItem);
        this.totalQty += cartItem.getQuantity();
        this.totalPrice += cartItem.getSubTotalPrice();
    }

    updateCartItem(cartItem: CartItem) {
        const index = this.cartItems.indexOf(cartItem);
        if (index > -1) {
            this.cartItems[index] = cartItem;
            this.totalQty = this.cartItems.reduce((acc, item) => acc + item.getQuantity(), 0);
            this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.getSubTotalPrice(), 0);
        } else console.log("L0G - Error - Cart item not found in shopping cart.\nCartItem: ", cartItem);
    }

    removeCartItem(cartItem: CartItem) {
        const index = this.cartItems.indexOf(cartItem);
        if (index > -1) {
            this.cartItems.splice(index, 1);
            this.totalQty -= cartItem.getQuantity();
            this.totalPrice -= cartItem.getSubTotalPrice();
        } else console.log("L0G - Error - Cart item not found in shopping cart.\nCartItem: ", cartItem);
    }

    clearCart() {
        this.cartItems = [];
        this.totalQty = 0;
        this.totalPrice = 0;
    }


}
