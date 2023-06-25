import { Render } from '../helpers/RenderArray';

export async function MergeArray(array, l, r, settings) {
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
			Render(array[l + i], settings.rows, l + i, 'black');
			Render(array[k], settings.rows, k, 'yellow');
			await new Promise((resolve) => setTimeout(resolve, settings.speed));
			array[k] = L[i];
			Render(array[k], settings.rows, k, 'red');
			Render(array[l + i], settings.rows, l + i, 'red');
			Render(settings.rows - array[k], settings.rows - array[k], k, 'none');
			Render(
				settings.rows - array[l + i],
				settings.rows - array[l + i],
				l + i,
				'none'
			);
			i++;
		} else {
			Render(array[m + 1 + j], settings.rows, m + 1 + j, 'black');
			Render(array[k], settings.rows, k, 'yellow');
			await new Promise((resolve) => setTimeout(resolve, settings.speed));
			array[k] = R[j];
			Render(array[k], settings.rows, k, 'red');
			Render(array[m + 1 + j], settings.rows, m + 1 + j, 'red');
			Render(settings.rows - array[k], settings.rows - array[k], k, 'none');
			Render(
				settings.rows - array[m + 1 + j],
				settings.rows - array[m + 1 + j],
				m + 1 + j,
				'none'
			);
			j++;
		}
		k++;
	}
	while (i < n1) {
		Render(array[l + i], settings.rows, l + i, 'yellow');
		Render(array[k], settings.rows, k, 'black');
		await new Promise((resolve) => setTimeout(resolve, settings.speed));
		array[k] = L[i];
		Render(array[k], settings.rows, k, 'red');
		Render(array[l + i], settings.rows, l + i, 'red');
		Render(settings.rows - array[k], settings.rows - array[k], k, 'none');
		Render(
			settings.rows - array[l + i],
			settings.rows - array[l + i],
			l + i,
			'none'
		);
		i++;
		k++;
	}
	while (j < n2) {
		Render(array[m + 1 + j], settings.rows, m + 1 + j, 'yellow');
		Render(array[k], settings.rows, k, 'black');
		await new Promise((resolve) => setTimeout(resolve, settings.speed));
		array[k] = R[j];
		Render(array[k], settings.rows, k, 'red');
		Render(array[m + 1 + j], settings.rows, m + 1 + j, 'red');
		Render(settings.rows - array[k], settings.rows - array[k], k, 'none');
		Render(
			settings.rows - array[m + 1 + j],
			settings.rows - array[m + 1 + j],
			m + 1 + j,
			'none'
		);
		j++;
		k++;
	}
}
export async function MergeSortFunction(array, l, r, settings) {
	if (l < r) {
		var m = Math.floor((l + r) / 2);
		await MergeSortFunction(array, l, m, settings);
		await MergeSortFunction(array, m + 1, r, settings);
		await MergeArray(array, l, r, settings);
	}
}
export async function MergeSort(settings) {
	var array = settings.inputs;
	var l = 0;
	var r = array.length - 1;
	await MergeSortFunction(array, l, r, settings);
	console.log(array, 'merge');
}
