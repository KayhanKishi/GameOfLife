
var rowNum = 30;
var colNum = 50;

let size = document.getElementById('gridSize');

gridLayout();


function gridLayout() {
    let gridLayout = document.getElementById('gridLayout');
    let table = document.createElement("table");
    
    for (let i = 0; i < rowNum; i++) {
        let tr = document.createElement("tr");
        for (var j = 0; j < colNum; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("id", i + "-" + j);
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridLayout.appendChild(table);
}



// Start everything
window.onload = initialize;