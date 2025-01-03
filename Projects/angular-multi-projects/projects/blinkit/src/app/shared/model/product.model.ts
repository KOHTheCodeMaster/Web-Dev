export class Product {

    private id: number;
    private categoryId: number;
    private name: string;
    private price: number;

    constructor(id: number, categoryId: number, name: string, price: number) {
        this.id = id;
        this.categoryId = categoryId;
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

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

}
