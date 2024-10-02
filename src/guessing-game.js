class GuessingGame {
    #min;
    #max;
    constructor() {
        this.#min;
        this.#max;
    }

    setRange(min, max) {
        this.#min = min;
        this.#max = max;
    }

    guess() {        
        return this.cand = Math.ceil((this.#max + this.#min) / 2);        
    }

    lower() {
        this.#max = this.cand;
    }

    greater() {
        this.#min = this.cand;
    }
}

module.exports = GuessingGame;
