function setcell(x,y,val){
	index = y * size + x;
	currentGen[index] = val;
}

function Blinker(){
	offset = (size - 3) / 2;
	currentGen = new Array(size * size).fill(0);
	setcell(offset, offset + 1, 1);
	setcell(offset + 1, offset + 1, 1);
	setcell(offset + 2, offset + 1, 1);
	color(currentGen);
}
