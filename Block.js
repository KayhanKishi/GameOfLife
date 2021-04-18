function Block(){
	offset = (size - 2) / 2;
	currentGen = new Array(size * size).fill(0);
	setcell(offset, offset, 1);
	setcell(offset, offset + 1, 1);
	setcell(offset + 1, offset, 1);
	setcell(offset + 1, offset + 1, 1);
	color(currentGen);
}