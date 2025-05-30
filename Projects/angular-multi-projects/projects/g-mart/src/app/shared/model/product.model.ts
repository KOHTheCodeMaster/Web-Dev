import {Category} from "./category.model";
import {Subcategory} from "./subcategory.model";
import {ProductUnitLabel} from "./product-unit-label.modal";

export class Product {

    private id: number;
    private name: string;
    private price: number;
    private discount: number;
    private productUnitValue: number;
    private productUnitLabel: ProductUnitLabel;
    private category: Category;
    private subCategory: Subcategory;

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

    //  Setters
    //  -------

    public setName(name: string): void {
        this.name = name;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public setProductUnitValue(value: number): void {
        this.productUnitValue = value;
    }

    public setDiscount(discount: number): void {
        this.discount = discount;
    }

    public setProductUnitLabel(productUnitLabel: ProductUnitLabel): void {
        this.productUnitLabel = productUnitLabel;
    }

    public setCategory(category: Category): void {
        this.category = category;
    }

    public setSubCategory(subCategory: Subcategory): void {
        this.subCategory = subCategory;
    }

    // Static method for cloning
    public static clone(product: Product): Product {
        return new Product(
            product.id,
            product.name,
            product.price,
            product.discount,
            product.productUnitValue,
            product.productUnitLabel,
            product.category,
            product.subCategory
        );
    }

}
