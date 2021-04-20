// var size = 30;
// var size = 30;

var temparr =[];
var size = 2;
check = 0;

function simulateCheck() {
  console.log("current: " + check)
  if(check == 1){
    check = 0;
    console.log("new: " + check)
  }else if(check == 0){
    check = 1;
    console.log("new: " + check)
  }

}
function myfunction(){
console.log("value: " + document.getElementById("gridSize").value)
  // localStorage.setItem("size", document.getElementById("gridSize").value);
}
// var size = 30;
// var size = localStorage.getItem("size");
var currentGen = new Array(size * size).fill(0);
var nextGen = new Array(size * size).fill(0);
console.log(document.getElementsByName("size"));

currentGen[45] = 1; //used for testing purposes to see if color function is working / 1 means cell is alive, 0 is dead
currentGen[46] = 1;
currentGen[47] = 1;

gridLayout();
color(currentGen);

console.log("currentGen: " + currentGen);
console.log("nextGen: " + nextGen);
runGame();

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
    //   currentGen.push(count);
      count++;
    }
    table.appendChild(tr);
  }
  gridLayout.appendChild(table);
  console.log(currentGen);
  console.log(nextGen)
}

function color(Gen) {
  for (let i = 0; i < size * size; i++) {
    if (Gen[i] == 1) {
      document.getElementById(`${i}`).style.backgroundColor = "red";
    }
    if (Gen[i] == 0) {
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

//   updateGrid();
  color(currentGen);
  console.log(currentGen);
  console.log(nextGen);
}

function condition(val, i) {
  if (val >= 0 && val < currentGen.length) {

    //right side
    if (i % size == 2) {

      if ((val !== (i - (size - 1))) && (val !== (i + (size + 1))) && (val !== (i + 1))) {
        return true;
      }

    // left side
    } else if (i % size == 0) {

      if ((val !== (i - 1)) && (val !== (i - (size + 1))) && (val !== (i + (size - 1)))) {
        return true;
      }

    // anything else
    } else {
      
      return true;
    }
  }
  return false;
}
function n(i) {
  let n1 = (n2 = n3 = n4 = n5 = n6 = n7 =n8= 0);
  let sum = 0;
  neighbors = [];
  val1 = i - size - 1;
  val2 = i - size;
  val3 = i - size + 1;
  val4 = i - 1;
  val5 = i + 1;
  val6 = i + size - 1;
  val7 = i + size;
  val8 = i + size + 1;

  // neighbor 1
  if (condition(val1, i)) {
    n1 = val1;
    sum += currentGen[n1];
  }

  // neighbor 2
  if (condition(val2, i)) {
    n2 = val2;
    sum += currentGen[n2];
  }

  // neighbor 3
  if (condition(val3, i)) {
    n3 = val3;
    sum += currentGen[n3];
  }

  // neighbor 4
  if (condition(val4, i)) {
    n4 = val4;
    sum += currentGen[n4];
  }

  // neighbor 5
  if (condition(val5, i)) {
    n5 = val5;
    sum += currentGen[n5];
  }

  // neighbor 6
  if (condition(val6, i)) {
    n6 = val6;
    sum += currentGen[n6];
  }

  // neighbor 7
  if (condition(val7, i)) {
    n7 = val7;
    sum += currentGen[n7];
    
  }

  // neighbor 8
  if (condition(val8, i)) {
    n8 = val8;
    sum += currentGen[n8];
  }

  return sum;
}

function updateGrid() {
//   let currNeighbors = [];
  let sum = 0;

    for (let i = 0; i < currentGen.length; i++) {
      sum = n(i);
      // console.log("i: " + i + " neighbors: " + sum);
      applyRule(i,sum);

  }
  currentGen = nextGen.slice(0);
  // console.log("currGen: " + currentGen);
  // console.log("nextGen: " + nextGen);
}

function endInterval(interval){
  clearInterval(interval)
}

function runGame(generations=1){
    iterations = 0
    const interval = setInterval(function() {
      // method to be executed;
     updateGrid();
     color(currentGen);
     iterations++
     console.log(iterations);
      if(iterations == generations){
        console.log("\n\nend Interval")
        endInterval(interval)
      }
    }, 200);

    // console.log("temp arr"+temparr)
}

function applyRule(cell,sum) {
  if(currentGen[cell] == 1){
    if(sum>3 || sum<2){
      nextGen[cell] = 0;
    }
    else if(sum==3 || sum ==2){
      nextGen[cell] = 1;
    }
  

  }else {
    if(sum==3 ){
      nextGen[cell] = 1;
    }
  }
}

function setcell(x,y,val){
	index = y * size + x;
	currentGen[index] = val;
}
