import { Render } from '../helpers/RenderArray';

export async function SelectionSort(settings, setSettings) {
	var array = settings.inputs;
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				Render(array[i], settings.rows, i, 'black');
				Render(array[j], settings.rows, j, 'yellow');
				await new Promise((resolve) => setTimeout(resolve, 25));
				[array[i], array[j]] = [array[j], array[i]];
				Render(array[i], settings.rows, i, 'red');
				Render(array[j], settings.rows, j, 'red');
				Render(settings.rows - array[i], settings.rows - array[i], i, 'none');
			}
		}
	}
	console.log(array, 'selection');
}
