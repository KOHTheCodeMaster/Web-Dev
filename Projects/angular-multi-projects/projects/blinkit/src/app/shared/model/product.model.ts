export class Product {

    private static lastProductId: number = 1;

    private id: number;
    private categoryId: number;
    private subCategoryId: number;  //  Auto Increment
    private name: string;
    private price: number;

    constructor(categoryId: number, subCategoryId: number, name: string, price: number) {
        this.id = Product.lastProductId++;
        this.categoryId = categoryId;
        this.subCategoryId = subCategoryId;
        this.name = name;
        this.price = price;
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

}
