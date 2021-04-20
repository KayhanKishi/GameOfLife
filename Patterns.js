function changeFunc() {
	var selectBox = document.getElementById("selectBox");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  console.log("selectedValue: " + selectedValue)
  if (selectedValue == "block"){ 
  Block();
  } else if (selectedValue == "beacon"){
  Beacon();
  } else if (selectedValue == "toad"){
  Toad();
  } else if (selectedValue == "pulsar"){
  Pulsar();
  } else if (selectedValue == "blinker"){
  Blinker();
  } else if (selectedValue == "glider"){
  Glider();
  } else {
	console.log("error")
  }
}
  
  function setcell(x,y,val){
    index = y * size + x;
    currentGen[index] = val;
  }
  function Beacon(){
    offset = (size - 4) / 2;
    currentGen = currentGen.fill(0);
    setcell(offset, offset, 1);
    setcell(offset, offset + 1, 1);
    setcell(offset + 1, offset, 1);
    setcell(offset + 1, offset + 1, 1);
    setcell(offset + 2, offset + 2, 1);
    setcell(offset + 2, offset + 3, 1);
    setcell(offset + 3, offset + 2, 1);
    setcell(offset + 3, offset + 3, 1);
    color(currentGen);
  }
  
  function Blinker(){
    offset = (size - 2) / 2;
    currentGen = currentGen.fill(0);
    setcell(offset, offset + 1, 1);
    setcell(offset + 1, offset + 1, 1);
    setcell(offset + 2, offset + 1, 1);
    color(currentGen);
  }
  function Block(){
    offset = (size - 2) / 2;
    currentGen = currentGen.fill(0);
    setcell(offset, offset, 1);
    setcell(offset, offset + 1, 1);
    setcell(offset + 1, offset, 1);
    setcell(offset + 1, offset + 1, 1);
    color(currentGen);
  }
  function Pulsar(){
    offset = (size - 16) / 2;
    currentGen = currentGen.fill(0);
    setcell(offset + 2, offset + 4, 1);
    setcell(offset + 2, offset + 5, 1);
    setcell(offset + 2, offset + 6, 1);
    setcell(offset + 2, offset + 10, 1);
    setcell(offset + 2, offset + 11, 1);
    setcell(offset + 2, offset + 12, 1);
    setcell(offset + 4, offset + 2, 1);
    setcell(offset + 4, offset + 7, 1);
    setcell(offset + 4, offset + 9, 1);
    setcell(offset + 4, offset + 14, 1);
    setcell(offset + 5, offset + 2, 1);
    setcell(offset + 5, offset + 7, 1);
    setcell(offset + 5, offset + 9, 1);
    setcell(offset + 5, offset + 14, 1);
    setcell(offset + 6, offset + 2, 1);
    setcell(offset + 6, offset + 7, 1);
    setcell(offset + 6, offset + 9, 1);
    setcell(offset + 6, offset + 14, 1);
    setcell(offset + 7, offset + 4, 1);
    setcell(offset + 7, offset + 5, 1);
    setcell(offset + 7, offset + 6, 1);
    setcell(offset + 7, offset + 10, 1);
    setcell(offset + 7, offset + 11, 1);
    setcell(offset + 7, offset + 12, 1);
    setcell(offset + 9, offset + 4, 1);
    setcell(offset + 9, offset + 5, 1);
    setcell(offset + 9, offset + 6, 1);
    setcell(offset + 9, offset + 10, 1);
    setcell(offset + 9, offset + 11, 1);
    setcell(offset + 9, offset + 12, 1);
    setcell(offset + 10, offset + 2, 1);
    setcell(offset + 10, offset + 7, 1);
    setcell(offset + 10, offset + 9, 1);
    setcell(offset + 10, offset + 14, 1);
    setcell(offset + 11, offset + 2, 1);
    setcell(offset + 11, offset + 7, 1);
    setcell(offset + 11, offset + 9, 1);
    setcell(offset + 11, offset + 14, 1);
    setcell(offset + 12, offset + 2, 1);
    setcell(offset + 12, offset + 7, 1);
    setcell(offset + 12, offset + 9, 1);
    setcell(offset + 12, offset + 14, 1);
    setcell(offset + 14, offset + 4, 1);
    setcell(offset + 14, offset + 5, 1);
    setcell(offset + 14, offset + 6, 1);
    setcell(offset + 14, offset + 10, 1);
    setcell(offset + 14, offset + 11, 1);
    setcell(offset + 14, offset + 12, 1);
    color(currentGen);
  }
  function Toad(){
    offset = (size - 4) / 2;
    currentGen = currentGen.fill(0);
    setcell(offset + 1, offset + 1, 1);
    setcell(offset + 1, offset + 2, 1);
    setcell(offset + 1, offset + 3, 1);
    setcell(offset + 2, offset, 1);
    setcell(offset + 2, offset + 1, 1);
    setcell(offset + 2, offset + 2, 1);
    color(currentGen);
  }
  function Glider(){
    offset = (size) / 2;
    currentGen = currentGen.fill(0);
    setcell(offset + 1, offset, 1);
    setcell(offset + 2, offset + 1, 1);
    setcell(offset, offset + 2, 1);
    setcell(offset + 1, offset + 2, 1);
    setcell(offset + 2, offset + 2, 1);
    color(currentGen);
  }