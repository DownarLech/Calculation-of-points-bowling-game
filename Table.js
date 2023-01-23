class Table {

    constructor() {
        this.tableWithResults = null;
    }

    generateTableWithResults(players) {

        const resultsTable = document.createElement("table");        
        this.generateTableHead(resultsTable, players[0]);
        let numberOfColumns = resultsTable.rows[0].cells.length;
                
        for (let player of players) {
            const playerRow = document.createElement("tr");

            this.createTdElementAndAddToRow(playerRow, player.name);
            this.createTdElementAndAddToRow(playerRow, player.finalResult);
            let cellCounter = 2;

            for (const result of player.currentResults) {
                cellCounter++;
                this.createTdElementAndAddToRow(playerRow, result);                
            }
            for (let i = 0; i < numberOfColumns - cellCounter; i++) {
                this.createTdElementAndAddToRow(playerRow, '');                
            }
        
            resultsTable.appendChild(playerRow);
        }
        
        this.tableWithResults = document.getElementById('tableWithResults').appendChild(resultsTable);
    }
        
    generateTableHead(table, data) {
        let thead = table.createTHead();
        let headerRow = thead.insertRow();

        this.createThElementAndAddToRow(headerRow, 'Player Name');
        this.createThElementAndAddToRow(headerRow, 'Final Score');

        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                if (Array.isArray(data[key])) {
                    for (let i = 0; i < data[key].length+2; i++) {
                        this.createThElementAndAddToRow(headerRow, i+1);
                    
                    }
                }
            }
        }
    }

    createTdElementAndAddToRow(row, name) {
        const td = document.createElement("td");
        td.textContent = name;
        row.appendChild(td);
    }

    createThElementAndAddToRow(row, name) {
        let th = document.createElement("th");
        let text = document.createTextNode(name);
        th.appendChild(text);
        row.appendChild(th);
    }
}