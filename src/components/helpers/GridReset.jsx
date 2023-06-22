export function GridReset(start, end, row, col, blocker) {
	console.log(start, end, row, col, blocker);
	var temp = [
		...blocker,
		`${start[0]}` + '-' + `${start[1]}`,
		`${end[0]}` + '-' + `${end[1]}`,
	];
	for (var i = 1; i <= row; i++) {
		for (var j = 1; j <= col; j++) {
			if (!temp.includes(`${i}` + '-' + `${j}`)) {
				console.log(i, j);
				document.getElementById(
					`${i}` + '-' + `${j}` + 'node'
				).style.background = 'none';
			}
		}
	}
}
