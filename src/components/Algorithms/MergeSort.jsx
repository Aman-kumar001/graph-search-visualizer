export function MergeArray(array, l, r) {
	var m = Math.floor((l + r) / 2);
	var n1 = m - l + 1;
	var n2 = r - m;
	var L = [];
	var R = [];
	for (var i = 0; i < n1; i++) {
		L[i] = array[l + i];
	}
	for (var j = 0; j < n2; j++) {
		R[j] = array[m + 1 + j];
	}
	var i = 0;
	var j = 0;
	var k = l;
	while (i < n1 && j < n2) {
		if (L[i] <= R[j]) {
			array[k] = L[i];
			i++;
		} else {
			array[k] = R[j];
			j++;
		}
		k++;
	}
	while (i < n1) {
		array[k] = L[i];
		i++;
		k++;
	}
	while (j < n2) {
		array[k] = R[j];
		j++;
		k++;
	}
}
export function MergeSortFunction(array, l, r) {
	if (l < r) {
		var m = Math.floor((l + r) / 2);
		MergeSortFunction(array, l, m);
		MergeSortFunction(array, m + 1, r);
		MergeArray(array, l, r);
	}
}
export async function MergeSort(settings) {
	var array = settings.inputs;
	var l = 0;
	var r = array.length - 1;
	MergeSortFunction(array, l, r);
	console.log(array, 'merge');
}
