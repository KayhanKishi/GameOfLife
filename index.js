
var rowNum = 5;
var colNum = 5;

let size = document.getElementById('gridSize');
let currentGen = [rowNum*rowNum];
let nextGen = [rowNum*rowNum];

gridLayout();
createGenArrays();

function createGenArrays() {
    for (let i = 0; i < rowNum*rowNum; i++) {
        currentGen[i] = 0;
        nextGen[i] = 0;
    }
}


// function initGenArrays() {
//     for (let i = 0; i < rowNum; i++) {
//         for (let j = 0; j < colNum; j++) {
//             currentGen[i][j] = 0;
//             nextGen[i][j] = 0;
//         }
//     }
// }



function gridLayout() {
    let gridLayout = document.getElementById('gridLayout');
    let table = document.createElement("table");
    let count =0;
    
    for (let i = 0; i < rowNum; i++) {
        let tr = document.createElement("tr");
        for (var j = 0; j < colNum; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("id", count);
            count++;
            cell.setAttribute("class", "deadcell");
            cell.addEventListener("click", clicking);
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridLayout.appendChild(table);
   
}



function clicking() {
    let pos = this.id;
    if (this.getAttribute("class") == "deadcell") {
        this.setAttribute("class", "alivecell");
        currentGen[pos] = 1;
    }
    else {
        this.setAttribute("class", "deadcell");
        currentGen[pos] = 0;
    }
    console.log(currentGen)
}

function updateGrid(){
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            let neighbors = applyRule(row, col);
        }
    }

    
}

function applyRule(){
    
}




// Start everything
window.onload = initialize;
