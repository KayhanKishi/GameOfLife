// var size = 30;
// var size = 30;

var size = 3;
// var size = document.getElementById("gridSize");
var currentGen = [];
var nextGen = [];

gridLayout();
createGenArrays();
currentGen[0] = 1; //used for testing purposes to see if color function is working / 1 means cell is alive, 0 is dead

// loop to continue running simulation
// updateGrid();
color();

function createGenArrays() {
  for (let i = 0; i < size * size; i++) {
    currentGen[i] = 0;
    nextGen[i] = 0;
  }
}

function gridLayout() {
  let gridLayout = document.getElementById("gridLayout");
  let table = document.createElement("table");
  let count = 0;

  for (let i = 0; i < size; i++) {
    let tr = document.createElement("tr");
    for (var j = 0; j < size; j++) {
      let cell = document.createElement("td");
      cell.setAttribute("id", count);
      cell.addEventListener("click", clicking);
      tr.appendChild(cell);
      currentGen.push(count);
      count++;
    }
    table.appendChild(tr);
  }
  gridLayout.appendChild(table);
  console.log(currentGen);
}

function color() {
  for (let i = 0; i < size * size; i++) {
    if (currentGen[i] == 1) {
      document.getElementById(`${i}`).style.backgroundColor = "red";
    }
    if (currentGen[i] == 0) {
      document.getElementById(`${i}`).style.backgroundColor = "gray";
    }
  }
}

function clicking() {
  let pos = this.id;
  if (currentGen[pos] == 0) {
    // this.setAttribute("class", "alivecell");
    currentGen[pos] = 1;
  } else {
    // this.setAttribute("class", "deadcell");
    currentGen[pos] = 0;
  }

  updateGrid();
  color();
  console.log(currentGen);
  console.log(nextGen);
}

function updateGrid() {
  for (let i = 0; i < size * size; i++) {
    let newCell = applyRule(currentGen[i]);

    nextGen[i] = newCell;
  }
  // set currentGen to newGen
}

function condition(val, i) {
  if (val >= 0 && val < currentGen.length) {

    //right side
    if (i % size == 2) {

        // console.log("val: " + val + " i + 1: "+ (i+1) + " | " + (val !== (i + 1)) );

        // console.log("val: " + val + " i - (size - 1): "+ (i - (size - 1)) + " | " + (val !== (i - (size - 1))));

      if ((val !== (i - (size - 1))) && (val !== (i + (size + 1))) && (val !== (i + 1))) {
        // console.log("condition 1 | " + val);
        return true;
      }

    // left side
    } else if (i % size == 0) {

        // console.log("val: " + val + " i -1: "+ (i-1) + " | " + (val !== (i - 1)));

        // console.log("val: " + val + " i + size - 1: "+ (i + (size - 1)) + " " + (val !== (i + (size - 1))));

      if ((val !== (i - 1)) && (val !== (i - (size + 1))) && (val !== (i + (size - 1)))) {
        // console.log("condition 2 | " + val);
        return true;
      }
    } else {
    //   console.log("else condition | " + val);
      return true;
    }
  }
  return false;
}
function n(i) {
  let n1 = (n2 = n3 = n4 = n5 = n6 = n7 = 0);
  neighbors = [];
  val1 = i - size - 1;
  val2 = i - size;
  val3 = i - size + 1;
  val4 = i - 1;
  val5 = i + 1;
  val6 = i + size - 1;
  val7 = i + size;
  val8 = i + size + 1;

//   console.log(
//     "\n\nval1: " +
//       val1 +
//       " val2: " +
//       val2 +
//       " val3: " +
//       val3 +
//       " val4: " +
//       val4 +
//       " val5: " +
//       val5 +
//       " val6: " +
//       val6 +
//       " val7: " +
//       val7
//   );

//   console.log("index: " + i);
  // neighbor 1
  if (condition(val1, i)) {
    n1 = val1;
    // console.log("n1: " + n1);
    neighbors.push(n1);
  }

  // neighbor 2
  if (condition(val2, i)) {
    n2 = val2;
    // console.log("n2: " + n2);
    neighbors.push(n2);
  }

  // neighbor 3
  if (condition(val3, i)) {
    n3 = val3;
    // console.log("n3: " + n3);
    neighbors.push(n3);
  }

  // neighbor 4
  if (condition(val4, i)) {
    n4 = val4;
    // console.log("n4: " + n4);
    neighbors.push(n4);
  }

  // neighbor 5
  if (condition(val5, i)) {
    n5 = val5;
    // console.log("n5: " + n5);
    neighbors.push(n5);
  }

  // neighbor 6
  if (condition(val6, i)) {
    n6 = val6;
    // console.log("n6: " + n6);
    neighbors.push(n6);
  }

  // neighbor 7
  if (condition(val7, i)) {
    n7 = val7;
    // console.log("n7: " + n7);
    neighbors.push(n7);
  }

  // neighbor 8
  if (condition(val8, i)) {
    n8 = val8;
    // console.log("n8: " + n8);
    neighbors.push(n8);
  }

  return neighbors;
}

function gameLogic() {
  let currNeighbors = [];
  if (currentGen) {
    for (i = 0; i < currentGen.length; i++) {
      currNeighbors = n(i);
        console.log("i: " + i + " neighbors: " + currNeighbors);
    }
  }
}

gameLogic();
function applyRule(cell) {
  // game logic
  // if(cell == 1){               testing
  //    return 5;
  // }
}
