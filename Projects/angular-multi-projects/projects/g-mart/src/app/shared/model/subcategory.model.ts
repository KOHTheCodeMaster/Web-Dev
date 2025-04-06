import {Category} from "./category.model";

export class Subcategory {

    private readonly id: number;
    private readonly category: Category;
    private readonly name: string;

    constructor(id: number, name: string, category: Category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }

    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getCategory(): Category {
        return this.category;
    }

    public getName(): string {
        return this.name;
    }

}
