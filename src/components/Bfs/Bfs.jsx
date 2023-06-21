import { isValid } from '../CheckValid';

export function BFS(startPos, endPos, row, col, callback) {
	var Q = [];
	var visited = [`${startPos[0]}` + '-' + `${startPos[1]}`];
	var path = [];
	var parent = {};
	var dis = 0;
	Q.push(startPos);
	visited.push(startPos);
	var grid = document.getElementById('gridWrap');
	console.log(grid);

	function processQueue() {
		if (Q.length > 0) {
			var len = Q.length;
			dis++;
			for (var i = 0; i < len; i++) {
				var current = Q.shift();

				path.push(current);
				document.getElementById(
					`${current[0]}` + '-' + `${current[1]}` + 'node'
				).style.backgroundColor = 'blue';
				if (
					isValid(current[0] + 1, current[1], row, col) &&
					!visited.includes(`${current[0] + 1}` + '-' + `${current[1]}`)
				) {
					Q.push([current[0] + 1, current[1]]);
					visited.push(`${current[0] + 1}` + '-' + `${current[1]}`);
					parent[`${current[0] + 1}` + '-' + `${current[1]}`] = current;
					if (current[0] + 1 == endPos[0] && current[1] == endPos[1]) {
						callback(path, dis, parent);
						return;
					}
				}

				if (
					isValid(current[0] - 1, current[1], row, col) &&
					!visited.includes(`${current[0] - 1}` + '-' + `${current[1]}`)
				) {
					Q.push([current[0] - 1, current[1]]);
					visited.push(`${current[0] - 1}` + '-' + `${current[1]}`);
					parent[`${current[0] - 1}` + '-' + `${current[1]}`] = current;
					if (current[0] - 1 == endPos[0] && current[1] == endPos[1]) {
						callback(path, dis, parent);
						return;
					}
				}

				if (
					isValid(current[0], current[1] + 1, row, col) &&
					!visited.includes(`${current[0]}` + '-' + `${current[1] + 1}`)
				) {
					Q.push([current[0], current[1] + 1]);
					visited.push(`${current[0]}` + '-' + `${current[1] + 1}`);
					parent[`${current[0]}` + '-' + `${current[1] + 1}`] = current;
					if (current[0] == endPos[0] && current[1] + 1 == endPos[1]) {
						callback(path, dis, parent);
						return;
					}
				}
				if (
					isValid(current[0], current[1] - 1, row, col) &&
					!visited.includes(`${current[0]}` + '-' + `${current[1] - 1}`)
				) {
					Q.push([current[0], current[1] - 1]);
					visited.push(`${current[0]}` + '-' + `${current[1] - 1}`);
					parent[`${current[0]}` + '-' + `${current[1] - 1}`] = current;
					if (current[0] == endPos[0] && current[1] - 1 == endPos[1]) {
						callback(path, dis, parent);
						return;
					}
				}
			}

			setTimeout(processQueue, 300);
		}
	}
	setTimeout(processQueue, 300);
}
