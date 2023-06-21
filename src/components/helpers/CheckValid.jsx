export function isValid(x, y, row, col) {
	if (x <= 0 || y <= 0 || x > row || y > col) {
		return false;
	}
	return true;
}
