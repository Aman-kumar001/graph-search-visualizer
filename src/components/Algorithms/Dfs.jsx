import { isValid } from '../helpers/CheckValid';

export async function Dfs(start, target, row, col, blocker) {
	var visited = new Set();
	var path = [];
	var parent = {};
	var distance = 400;
	var dx = [0, 1, -1, 0];
	var dy = [1, 0, 0, -1];

	async function nodeSearch(curr, dis) {
		if (curr[0] === target[0] && curr[1] === target[1]) {
			console.log(dis);
			distance = dis;
			return true;
		}

		visited.add(`${curr[0]}-${curr[1]}`);

		document.getElementById(`${curr[0]}-${curr[1]}node`).style.backgroundColor =
			'rgb(117, 117, 246)';
		document.getElementById(`${curr[0]}-${curr[1]}node`).style.border =
			'1px solid rgb(117, 117, 246)';

		path.push(curr);

		for (var i = 0; i < 4; i++) {
			var nextX = curr[0] + dx[i];
			var nextY = curr[1] + dy[i];

			if (
				isValid(nextX, nextY, row, col) &&
				!visited.has(`${nextX}-${nextY}`) &&
				!blocker.includes(`${nextX}-${nextY}`)
			) {
				parent[`${nextX}-${nextY}`] = curr;
				await delay(50);
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

	await nodeSearch(start, 0);
	return { path: path, parent: parent, dis: distance };
}
