import { isValid } from '../helpers/CheckValid';

export function Dfs(start, target, row, col, blocker) {
	// var parent = {};
	var visited = [`${start[0]}-${start[1]}`];
	var path = [];
	var current = start;
	var dx = [0, 1, -1, 0];
	var dy = [1, 0, 0, -1];

	function nodeSearch(curr, dis) {
		if (curr[0] === target[0] && curr[1] === target[1]) {
			return;
		}

		document.getElementById(`${curr[0]}-${curr[1]}node`).style.backgroundColor =
			'rgb(117, 117, 246)';

		console.log(curr);

		path.push(curr);
		visited.push(`${curr[0]}-${curr[1]}`);

		for (var i = 0; i < 4; i++) {
			if (
				isValid(curr[0] + dx[i], curr[1] + dy[i], row, col) &&
				!visited.includes(`${curr[0] + dx[i]}-${curr[1] + dy[i]}`) &&
				!blocker.includes(`${curr[0] + dx[i]}-${curr[1] + dy[i]}`)
			) {
				setTimeout(function () {
					nodeSearch([curr[0] + dx[i], curr[1] + dy[i]], dis + 1);
				}, 100); // Delay of 200ms

				break;
			}
		}
		return;
	}

	setTimeout(function () {
		nodeSearch(current, 0);
	}, 100); // Delay of 200ms
}
