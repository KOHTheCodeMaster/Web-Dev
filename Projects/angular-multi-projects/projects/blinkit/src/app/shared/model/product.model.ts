export class Product {

    private static lastProductId: number = 1;

    private id: number;
    private categoryId: number;
    private subCategoryId: number;  //  Auto Increment
    private name: string;
    private price: number;
    private quantity: number;
    private subtotalPrice: number;

    constructor(categoryId: number, subCategoryId: number, name: string, price: number, quantity?: number) {
        this.id = Product.lastProductId++;
        this.categoryId = categoryId;
        this.subCategoryId = subCategoryId;
        this.name = name;
        this.price = price;
        this.quantity = quantity || 0
        this.subtotalPrice = this.price * this.quantity;
    }

    incrementQuantity() {
        this.quantity++;
        this.subtotalPrice = this.price * this.quantity;
    }

    decrementQuantity() {
        if (this.quantity > 0) {
            this.quantity--;
            this.subtotalPrice = this.price * this.quantity;
        }
    }


    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getCategoryId(): number {
        return this.categoryId;
    }

    public getSubCategoryId(): number {
        return this.subCategoryId;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getSubtotalPrice(): number {
        return this.subtotalPrice;
    }

}
