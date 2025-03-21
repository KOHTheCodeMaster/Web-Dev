export class ProductUnit {

    private readonly name: string;
    private readonly value: number;

    constructor(type: string, value: number) {
        this.name = type;
        this.value = value;
    }


    //  Getters
    //  -------

    public getType(): string {
        return this.name;
    }

    public getValue(): number {
        return this.value;
    }

}
