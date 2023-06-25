import { Render } from '../helpers/RenderArray';

export async function Partition(array, l, r, settings) {
	var pivot = array[r];
	var i = l - 1;

	for (var j = l; j < r; j++) {
		if (array[j] < pivot) {
			i++;
			Render(array[i], settings.rows, i, 'black');
			Render(array[j], settings.rows, j, 'yellow');
			await new Promise((resolve) => setTimeout(resolve, settings.speed));
			[array[i], array[j]] = [array[j], array[i]];
			Render(array[i], settings.rows, i, 'red');
			Render(array[j], settings.rows, j, 'red');
			Render(settings.rows - array[i], settings.rows - array[i], i, 'none');
		}
	}
	Render(array[i + 1], settings.rows, i + 1, 'black');
	Render(array[r], settings.rows, r, 'yellow');
	[array[i + 1], array[r]] = [array[r], array[i + 1]];
	Render(array[i + 1], settings.rows, i + 1, 'red');
	Render(array[r], settings.rows, r, 'red');
	Render(
		settings.rows - array[i + 1],
		settings.rows - array[i + 1],
		i + 1,
		'none'
	);

	return i + 1;
}

export async function quickSortFunction(array, l, r, settings) {
	if (l < r) {
		var part = await Partition(array, l, r, settings);
		await quickSortFunction(array, l, part - 1, settings);
		await quickSortFunction(array, part + 1, r, settings);
	}
}

export async function QuickSort(settings) {
	var array = settings.inputs;
	await quickSortFunction(array, 0, array.length - 1, settings);
	console.log(array, 'quick');
}
