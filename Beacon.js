function Beacon(){
	offset = (size - 4) / 2;
	currentGen = new Array(size * size).fill(0);
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