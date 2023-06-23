export function SelectionSort(settings, setSettings) {
	var array = settings.inputs;
	for (var i = 0; i < array.length - 1; i++) {
		for (var j = i; j < array.length; j++) {
			[array[j], array[j]] = [array[j], array[j]];
		}
	}
	console.log(array);
}
