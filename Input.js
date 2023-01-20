class Input {

    constructor() {
    }

    render() {
        const input = document.createElement('input');
        input.type = "file";

        input.addEventListener(
            'change',
            (event) => this.generatePlayersTableFromFileData(event)
        )

        return input;
    }

    generatePlayersTableFromFileData(event) {
        let players = [];
        let arrayContent = [];
            
        const reader = new FileReader();
        reader.readAsText(event.target.files[0]);
        reader.onload = () => {
            const text = reader.result;
            arrayContent = text.split(/\r?\n/).filter(n => n);
            
            for (var line = 0; line < arrayContent.length; line+=2) {
                const results = arrayContent[line+1].split(",");
        
                results.forEach(function(element, index) {
                    this[index] = Number(element.trim());
                }, results);
                
                const player = new Player(arrayContent[line], results);
                player.calculateFinalResult()
                players.push(player);
            }
        };
        
        reader.onloadend = () => {
            const tableWithResults = new Table();
            tableWithResults.generateTableWithResults(players);
        };
    }
}