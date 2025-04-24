import {Product} from "./product.model";

export class CartItem {

    // private readonly id: number;
    private readonly product: Product;
    private quantity: number;
    private subTotalPrice: number;

    constructor(product: Product, qty?: number) {
        // this.id = id;
        this.product = product;
        this.quantity = qty || 0;   //  default to 0 if not provided
        this.subTotalPrice = product.getPrice() * this.quantity;
    }

    incrementQuantity() {
        this.quantity++;
        this.subTotalPrice = (this.product.getPrice() - this.product.getDiscount()) * this.quantity;
    }

    decrementQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
            this.subTotalPrice = (this.product.getPrice() - this.product.getDiscount()) * this.quantity;
        }
    }

    //  Getters
    //  -------

    public getProduct(): Product {
        return this.product;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getSubTotalPrice(): number {
        return this.subTotalPrice;
    }

}

