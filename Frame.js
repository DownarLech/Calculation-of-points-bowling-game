class Frame {

    constructor(firstThrow = 0, secondThrow = 0) {
        this.firstThrow = firstThrow;
        this.secondThrow = secondThrow;
        this.strike = this.checkIfStrike();
        this.spare = this.checkIfSpare();
    }

    checkIfStrike() {
        return this.firstThrow === 10 && this.secondThrow === 0 ? true 
        : this.firstThrow === 0 && this.secondThrow === 10 ? true 
        : false;
    }

    checkIfSpare() {
        if (this.strike) {
            return false;
        }

        return ((this.firstThrow + this.secondThrow) === 10)? true : false;
    }
}