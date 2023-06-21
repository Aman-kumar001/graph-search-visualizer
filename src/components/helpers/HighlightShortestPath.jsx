export function HighlightShortestPath(path, dis, parent) {
	var len = path.length;
	var st = path[path.length - 1];
	console.log(path, dis, parent);
	for (let i = 0; i < len; i++) {
		document.getElementById(
			`${st[0]}` + '-' + `${st[1]}` + 'node'
		).style.backgroundColor = 'purple';
		if (parent[`${st[0]}` + '-' + `${st[1]}`] == undefined) {
			break;
		}
		st = parent[`${st[0]}` + '-' + `${st[1]}`];
	}
}
