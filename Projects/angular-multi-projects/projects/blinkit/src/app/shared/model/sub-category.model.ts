export class SubCategory {

    private static lastSubCategoryId: number = 1;

    private id: number;
    private categoryId: number;
    private name: string;

    constructor(categoryId: number, name: string, id?: number) {
        this.id = id ? id : SubCategory.lastSubCategoryId++;
        this.categoryId = categoryId;
        this.name = name;
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

}
