export class Label {

    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getName() : string {
        return this.name;
    }

}
