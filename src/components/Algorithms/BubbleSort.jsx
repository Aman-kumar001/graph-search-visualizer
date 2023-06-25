import { Render } from '../helpers/RenderArray';

export async function BubbleSort(settings, setSettings) {
	var array = settings.inputs;
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				Render(array[j], settings.rows, j, 'black');
				Render(array[j + 1], settings.rows, j + 1, 'yellow');
				await new Promise((resolve) => setTimeout(resolve, settings.speed));
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
				Render(array[j], settings.rows, j, 'red');
				Render(array[j + 1], settings.rows, j + 1, 'red');
				Render(settings.rows - array[j], settings.rows - array[j], j, 'none');
				Render(
					settings.rows - array[j + 1],
					settings.rows - array[j + 1],
					j + 1,
					'none'
				);
			}
		}
	}
	console.log(array, 'bubble');
}
