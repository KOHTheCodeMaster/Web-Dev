export class Category {

    private id: number;
    private name: string;
    // private categoryDescription: string;
    // private categoryImage: string;


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    //  Getters
    //  -------

    public getCategoryId(): number {
        return this.id;
    }

    public getCategoryName(): string {
        return this.name;
    }

}
