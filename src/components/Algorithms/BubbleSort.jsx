export async function BubbleSort(settings, setSettings) {
	var array = settings.inputs;
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array.length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	console.log(array, 'bubble');
}
