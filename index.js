
var rowNum = 30;
var colNum = 30;

let size = document.getElementById("gridSize");
let currentGen = [rowNum*rowNum];
let nextGen = [rowNum*rowNum];

gridLayout();
createGenArrays();
currentGen[0]=1;     //used for testing purposes to see if color function is working / 1 means cell is alive, 0 is dead


// loop to continue running simulation
// updateGrid();
color()


function createGenArrays() {
    for (let i = 0; i < rowNum*rowNum; i++) {
        currentGen[i] = 0;
        nextGen[i] = 0;
    }
}

function gridLayout() {
    let gridLayout = document.getElementById("gridLayout");
    let table = document.createElement("table");
    let count =0;
    
    for (let i = 0; i < rowNum; i++) {
        let tr = document.createElement("tr");
        for (var j = 0; j < colNum; j++) {
            let cell = document.createElement("td");
            cell.setAttribute("id", count);
            count++;
   //         cell.setAttribute("class", "deadcell");
            cell.addEventListener("click", clicking);
            tr.appendChild(cell);
        }
        table.appendChild(tr);
    }
    gridLayout.appendChild(table);
   
}

function color(){
    for(let i=0; i<rowNum*rowNum; i++){
        if(currentGen[i]==1){
            document.getElementById(`${i}`).style.backgroundColor="red";
        }
        if(currentGen[i]==0){
            document.getElementById(`${i}`).style.backgroundColor="gray";
        }
    }
}

function clicking() {
    let pos = this.id;
    if (currentGen[pos] == 0) {
        // this.setAttribute("class", "alivecell");
        currentGen[pos] = 1;
    }
    else {
        // this.setAttribute("class", "deadcell");
        currentGen[pos] = 0;
    }

    updateGrid();
    color();
    console.log(currentGen)
    console.log(nextGen)
}

function updateGrid(){
    for (let i = 0; i < rowNum*rowNum; i++) {
        let newCell = applyRule(currentGen[i]);

        nextGen[i] = newCell;
    }
    // set currentGen to newGen

}

function applyRule(cell){
    // game logic
   
   
    // if(cell == 1){               testing
    //    return 5; 
    // }

}




// Start everything
window.onload = initialize;
