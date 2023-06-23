export function CreateArray(row, col) {
	var arr = [];
	for (var i = 0; i < col; i++) {
		//generate random number between 0 and col
		arr.push(Math.floor(Math.random() * (row + 1)));
	}
	return arr;
}
