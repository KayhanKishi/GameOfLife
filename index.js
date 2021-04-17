let size = 20;

gridLayout();

function gridLayout() {
    let gridLayout = document.getElementById('gridLayout');
    let table = document.createElement("table");
    
    for (let i = 0; i < size; i++) {
        let row = document.createElement("tr");
        for (var j = 0; j < size; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("id", i + "-" + j);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    gridLayout.appendChild(table);
}



window.onload = initialize;