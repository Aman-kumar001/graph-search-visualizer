export function RenderArray(array, row, col) {
	for (var i = 0; i < array.length; i++) {
		for (var j = row; j > row - array[i]; j--) {
			Render(array[i], row, i, 'red');
		}
	}
}

export function Render(len, row, i, color) {
	for (var j = row; j > row - len; j--) {
		document.getElementById(
			`${j}` + '-' + `${i + 1}` + 'node'
		).style.backgroundColor = color;
	}
}
