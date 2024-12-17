export default class Player {

    constructor(name, symbol) {
        this.name = name;
        this.symbol = symbol;
        this.score = 0;
    }

    incrementScore() {
        this.score += 1;
    }

    getTurnMsg() {
        return `Turn: ${this.name} (${this.symbol})`;
    }

    getWinMsg() {
        return `Winner: ${this.name} (${this.symbol})`;
    }

}
