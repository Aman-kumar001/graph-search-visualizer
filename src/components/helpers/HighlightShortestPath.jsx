export function HighlightShortestPath(path, dis, parent) {
	if (dis == -1) {
		alert('No path found');
		return;
	}
	var len = path.length;
	var st = path[path.length - 1];
	console.log(path, dis, parent);
	for (let i = 0; i < len; i++) {
		document.getElementById(
			`${st[0]}` + '-' + `${st[1]}` + 'node'
		).style.backgroundColor = 'yellow';
		document.getElementById(
			`${st[0]}` + '-' + `${st[1]}` + 'node'
		).style.borderRadius = '8px';

		if (parent[`${st[0]}` + '-' + `${st[1]}`] == undefined) {
			break;
		}
		st = parent[`${st[0]}` + '-' + `${st[1]}`];
	}
}
