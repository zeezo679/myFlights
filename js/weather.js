document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach(inputField=>{
        const tableRows = document.querySelectorAll("tbody tr");
        const headerCell = inputField.closest("th");     //dtermine the column index of search
        const otherHeaderCells = inputField.closest("tr").querySelectorAll("th");
        const columnIndex = Array.from(otherHeaderCells).indexOf(headerCell); //turning into array first rather than a NodeList so we can use the indexOf method.
        console.log(columnIndex);
        const searchableCells = Array.from(tableRows)
        .map(row => row.querySelectorAll("td")[columnIndex]); 

        console.log(searchableCells);
    
        inputField.addEventListener("input", ()=>{
            const searchQuery = inputField.value.toLowerCase();

            for(const tableCell of searchableCells){
                const row = tableCell.closest("tr");   //gets the whole row of the current cell
                const value = tableCell.textContent   //the value of the table cell
                        .toLowerCase()
                        .replace(",", "");  // Remove commas to allow searching by number
                
                row.style.visibility = null;     //to show all the rows after search

                if(value.search(searchQuery) === -1){
                    row.style.visibility = "collapse";
                }
            }
        })
    })
})