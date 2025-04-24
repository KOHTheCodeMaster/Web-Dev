import {Category} from "./category.model";
import {Subcategory} from "./subcategory.model";
import {ProductUnitLabel} from "./product-unit-label.modal";

export class Product {

    private readonly id: number;
    private readonly name: string;
    private readonly price: number;
    private readonly discount: number;
    private readonly productUnitValue: number;
    private readonly productUnitLabel: ProductUnitLabel;
    private readonly category: Category;
    private readonly subCategory: Subcategory;

    constructor(id: number,
                name: string,
                price: number,
                discount: number,
                productUnitValue: number,
                productUnitLabel: ProductUnitLabel,
                category: Category,
                subcategory: Subcategory) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.discount = Math.floor(discount);
        this.productUnitValue = productUnitValue;
        this.productUnitLabel = productUnitLabel;
        this.category = category;
        this.subCategory = subcategory;
    }


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

    public getProductUnitValue(): number {
        return this.productUnitValue;
    }

    public getProductUnitLabel(): ProductUnitLabel {
        return this.productUnitLabel;
    }

    public getDiscount(): number {
        return this.discount;
    }

}
