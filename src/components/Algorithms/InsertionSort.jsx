import { Render } from '../helpers/RenderArray';

export async function InsertionSort(settings) {
	var array = settings.inputs;
	for (var i = 0; i < array.length; i++) {
		var key = array[i];
		var j = i - 1;
		// Render(array[i], settings.rows, i, 'pink');
		while (j >= 0 && array[j] > key) {
			Render(array[j], settings.rows, j, 'black');
			Render(array[j + 1], settings.rows, j + 1, 'yellow');
			await new Promise((resolve) => setTimeout(resolve, 20));
			array[j + 1] = array[j];
			Render(array[j], settings.rows, j, 'red');
			Render(array[j + 1], settings.rows, j + 1, 'red');
			Render(settings.rows - array[j], settings.rows - array[j], j, 'none');
			Render(
				settings.rows - array[j + 1],
				settings.rows - array[j + 1],
				j + 1,
				'none'
			);
			Render(settings.rows - array[j], settings.rows - array[j], j, 'none');
			Render(
				settings.rows - array[j + 1],
				settings.rows - array[j + 1],
				j + 1,
				'none'
			);
			j = j - 1;
		}
		array[j + 1] = key;
		Render(
			settings.rows - array[j + 1],
			settings.rows - array[j + 1],
			j + 1,
			'none'
		);
		Render(settings.rows - array[i], settings.rows - array[i], i, 'none');
		// await new Promise((resolve) => setTimeout(resolve, 20));
	}
	console.log(array, 'insertion');
}
