import { isValid } from '../helpers/CheckValid';

export function Dfs(start, target, row, col, blocker, callback) {
	console.log(start, target, row, col, blocker);
	var parent = {};
	var visited = [`${start[0]}` + '-' + `${start[1]}`];
	var path = [];
	// var dis = 0;
	var found = false;
	var current = start;
	var dx = [0, 1, -1, 0];
	var dy = [1, 0, 0, -1];
	function nodeSearch(curr, dis) {
		if (curr[0] == target[0] && curr[1] === target[1]) {
			callback(path, dis, parent);
			return;
		}
		document.getElementById(
			`${curr[0]}` + '-' + `${curr[1]}` + 'node'
		).style.backgroundColor = 'rgb(117, 117, 246)';

		for (var i = 0; i < 4; i++) {
			if (
				isValid(curr[0] + dx[i], curr[1] + dy[i], row, col) &&
				!visited.includes(`${curr[0] + dx[i]}` + '-' + `${curr[1] + dy[i]}`) &&
				!blocker.includes(`${curr[0] + dx[i]}` + '-' + `${curr[1] + dy[i]}`)
			) {
				visited.push(`${curr[0] + dx[i]}` + '-' + `${curr[1] + dy[i]}`);
				parent[`${curr[0] + dx[i]}` + '-' + `${curr[1] + dy[i]}`] = curr;

				return setTimeout(
					nodeSearch([curr[0] + dx[i], curr[1] + dy[i]], dis + 1),
					300
				);
			}
		}
	}
	setTimeout(nodeSearch(current, 0), 300);
}
