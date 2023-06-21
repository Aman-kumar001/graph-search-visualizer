export function Dfs(start, target, row, col, bocker) {
	console.log(start, target, row, col, bocker);

	var parent = {};
	var visited = [`${start[0]}` + '-' + `${start[1]}`];
	var path = [];
	var dis = 0;
	var found = false;
	var Q = [start];
}
