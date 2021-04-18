function Glider(){
	offset = (size - 3) / 2;
	currentGen = new Array(size * size).fill(0);
	setcell(offset + 1, offset, 1);
	setcell(offset + 2, offset + 1, 1);
	setcell(offset, offset + 2, 1);
	setcell(offset + 1, offset + 2, 1);
	setcell(offset + 2, offset + 2, 1);
	color(currentGen);
}