import { Render } from '../helpers/RenderArray';
async function heapify(array, n, i, settings) {
	var largest = i;
	var l = 2 * i + 1;
	var r = 2 * i + 2;
	if (l < n && array[l] > array[largest]) {
		largest = l;
	}
	if (r < n && array[r] > array[largest]) {
		largest = r;
	}
	if (largest !== i) {
		Render(array[i], settings.rows, i, 'black');
		Render(array[largest], settings.rows, largest, 'yellow');
		await new Promise((resolve) => setTimeout(resolve, settings.speed));
		[array[i], array[largest]] = [array[largest], array[i]]; //swap here
		Render(array[i], settings.rows, i, 'red');
		Render(array[largest], settings.rows, largest, 'red');
		Render(settings.rows - array[i], settings.rows - array[i], i, 'none');
		Render(
			settings.rows - array[largest],
			settings.rows - array[largest],
			largest,
			'none'
		);
		await heapify(array, n, largest, settings);
	}
}

async function heapSortFunction(array, n, settings) {
	for (var i = n / 2 - 1; i >= 0; i--) {
		await heapify(array, n, i, settings);
	}
	for (var i = n - 1; i > 0; i--) {
		Render(array[i], settings.rows, i, 'black');
		Render(array[0], settings.rows, 0, 'yellow');
		await new Promise((resolve) => setTimeout(resolve, settings.speed));
		[array[0], array[i]] = [array[i], array[0]];
		Render(array[i], settings.rows, i, 'red');
		Render(array[0], settings.rows, 0, 'red');
		Render(settings.rows - array[i], settings.rows - array[i], i, 'none');
		Render(settings.rows - array[0], settings.rows - array[0], 0, 'none');

		await heapify(array, i, 0, settings);
	}
}

export async function HeapSort(settings) {
	var array = settings.inputs;
	await heapSortFunction(array, array.length, settings);
	console.log(array, 'heap');
}
