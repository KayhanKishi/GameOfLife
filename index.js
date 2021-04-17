var rowNum = 30;
var colNum = 50;
var currentGen = [];
console.log(document.cookie);
let size = document.getElementById("gridSize");

gridLayout();

function main() {}
function gridLayout() {
  let gridLayout = document.getElementById("gridLayout");
  let table = document.createElement("table");
  let count = 0;
  for (let i = 0; i < rowNum; i++) {
    let tr = document.createElement("tr");
    for (var j = 0; j < colNum; j++) {
      let cell = document.createElement("td");
      let cellButton = document.createElement("button");
      cellButton.setAttribute("class", "cellButton");
      cellButton.setAttribute("id", count);
      cellButton.setAttribute("onclick", "console.log(this)");
      currentGen.push(cellButton);
      count++;
      cell.appendChild(cellButton);
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  gridLayout.appendChild(table);
  console.log(currentGen);
}

// Start everything
// window.onload = initialize;
