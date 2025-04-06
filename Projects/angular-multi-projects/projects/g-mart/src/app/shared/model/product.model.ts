import {Category} from "./category.model";
import {Subcategory} from "./subcategory.model";

export class Product {

    private readonly id: number;
    private readonly name: string;
    private readonly price: number;
    // private readonly quantity: number;
    // private readonly subtotalPrice: number;
    private readonly unitLabel: string;
    private readonly category: Category;
    private readonly subCategory: Subcategory;  //  Auto Increment

    constructor(id: number,
                name: string,
                price: number,
                unitLabel: string,
                category: Category,
                subcategory: Subcategory) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.unitLabel = unitLabel;
        this.category = category;
        this.subCategory = subcategory;
        // this.quantity = quantity || 0
        // this.subtotalPrice = this.price * this.quantity;
    }

/*
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
*/


    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getCategory(): Category {
        return this.category;
    }

    public getSubcategory(): Subcategory {
        return this.subCategory;
    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getQuantity(): number {
        return 0;
    }

    public getUnitLabel(): string {
        return this.unitLabel;
    }

}
