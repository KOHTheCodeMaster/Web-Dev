import {Product} from "./product.model";

export class CartItem {

    // private readonly id: number;
    private readonly product: Product;
    private quantity: number;
    private totalMRP: number;
    private totalDiscount: number;
    private subTotalPrice: number;

    constructor(product: Product, qty?: number | null) {
        // this.id = id;
        this.product = product;
        this.quantity = qty !== undefined && qty !== null ? qty : 1;    //  default to 1 if not provided
        this.totalMRP = product.getPrice() * this.quantity;
        this.totalDiscount = product.getDiscount() * this.quantity;
        this.subTotalPrice = (product.getPrice() - product.getDiscount()) * this.quantity;
    }

    incrementQuantity() {
        this.quantity++;
        this.updateTotalValues();
    }

    decrementQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
            this.updateTotalValues();
        }
    }

    updateTotalValues() {
        this.totalMRP = this.product.getPrice() * this.quantity;
        this.totalDiscount = this.product.getDiscount() * this.quantity;
        this.subTotalPrice = (this.product.getPrice() - this.product.getDiscount()) * this.quantity;
    }

    //  Getters
    //  -------

    public getProduct(): Product {
        return this.product;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getTotalMRP(): number {
        return this.totalMRP;
    }

    public getTotalDiscount(): number {
        return this.totalDiscount;
    }

    public getSubTotalPrice(): number {
        return this.subTotalPrice;
    }

}

