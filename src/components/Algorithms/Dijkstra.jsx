import { isValid } from '../helpers/CheckValid';

export async function Dijkstra(start, target, row, col, blockers) {
	console.log(start, target, row, col, blockers);
	var path = [];
	var visited = new Set();
	var parent = {};
	var distance = {};
	var dx = [-1, 0, 1, 0];
	var dy = [0, 1, 0, -1];
	//initialize the distance array to infinity
	for (var i = 1; i <= row; i++) {
		for (var j = 1; j <= col; j++) distance[`${i}` + '-' + `${j}`] = Infinity;
	}
	distance[`${start[0]}` + '-' + `${start[1]}`] = 0;

	function findMin() {
		var min = Infinity;
		var node = [];
		for (var i = 1; i <= row; i++) {
			for (var j = 1; j <= col; j++) {
				if (
					distance[`${i}` + '-' + `${j}`] < min &&
					!visited.has(`${i}` + '-' + `${j}`)
				) {
					min = distance[`${i}` + '-' + `${j}`];
					node = [i, j];
				}
			}
		}
		return node;
	}

	while (true) {
		var node = findMin();
		await new Promise((resolve) => setTimeout(resolve, 50));
		if (node[0] === target[0] && node[1] === target[1]) {
			path.push(node);
			return {
				path: path,
				parent: parent,
				dis: distance[`${node[0]}` + '-' + `${node[1]}`],
			};
		}
		for (var i = 0; i < 4; i++) {
			var x = node[0] + dx[i];
			var y = node[1] + dy[i];
			if (
				isValid(x, y, row, col) &&
				!visited.has(`${x}` + '-' + `${y}`) &&
				!blockers.includes(`${x}` + '-' + `${y}`)
			) {
				if (
					distance[`${x}` + '-' + `${y}`] >
					distance[`${node[0]}` + '-' + `${node[1]}`] + 1
				) {
					distance[`${x}` + '-' + `${y}`] =
						distance[`${node[0]}` + '-' + `${node[1]}`] + 1;
					parent[`${x}` + '-' + `${y}`] = [node[0], node[1]];
				}
			}
		}

		document.getElementById(
			`${node[0]}` + '-' + `${node[1]}node`
		).style.backgroundColor = 'rgb(117, 117, 246)';
		path.push(node);
		visited.add(`${node[0]}` + '-' + `${node[1]}`);
	}
}
