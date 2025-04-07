export class ProductUnitLabel {

    private readonly id: number;
    private readonly label: string;

    constructor(id: number, type: string) {
        this.id = id;
        this.label = type;
    }

    toString(): string {
        return this.label;
    }


    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getLabel(): string {
        return this.label;
    }

}
