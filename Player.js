class Player {
    finalResult = 0;

    constructor(name, results = []) {
        this.name = name;
        this.currentResults = results;
    }

    calculateFinalResult() {
        let strike = false;
        let spare = false;

        for (let key of this.currentResults.keys()) {  
  
            if ((key%2) !== 0) {
                continue;
            }
            let frame =  new Frame(this.currentResults[key], this.currentResults[++key]);

            if (strike) {
                this.finalResult += frame.firstThrow;
                this.finalResult += frame.secondThrow;
                strike = false;
            }
            if (spare) {
                this.finalResult += frame.firstThrow;
                spare = false;
            }

            if (key < 20) {
                this.finalResult += frame.firstThrow;
                this.finalResult += frame.secondThrow;
            }

            if (frame.strike) {
                strike = true;
            }
            if (frame.spare) {
                spare = true;
            }
        }
    }
}