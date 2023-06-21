import { isValid } from '../helpers/CheckValid';

export function Dfs(start, target, row, col, blocker) {
	var visited = new Set();
	var path = [];
	var dx = [0, 1, -1, 0];
	var dy = [1, 0, 0, -1];

	async function nodeSearch(curr, dis) {
		if (curr[0] === target[0] && curr[1] === target[1]) {
			return true;
		}

		visited.add(`${curr[0]}-${curr[1]}`);

		document.getElementById(`${curr[0]}-${curr[1]}node`).style.backgroundColor =
			'rgb(117, 117, 246)';

		path.push(curr);

		for (var i = 0; i < 4; i++) {
			var nextX = curr[0] + dx[i];
			var nextY = curr[1] + dy[i];

			if (
				isValid(nextX, nextY, row, col) &&
				!visited.has(`${nextX}-${nextY}`) &&
				!blocker.includes(`${nextX}-${nextY}`)
			) {
				await delay(100); // Delay of 100ms
				var temp = await nodeSearch([nextX, nextY], dis + 1);
				if (temp) {
					return true;
				}
			}
		}

		path.pop();
		return false;
	}

	function delay(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	nodeSearch(start, 0);
	console.log(path);
}
