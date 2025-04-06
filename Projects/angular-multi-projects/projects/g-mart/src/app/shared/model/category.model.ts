export class Category {

    // private static lastCategoryId: number = 1;

    private id: number;
    private name: string;

    constructor(id: number, name: string,) {
        this.id = id;
        this.name = name;
    }

    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

}
