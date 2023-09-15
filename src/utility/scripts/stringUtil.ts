export function stringLimit(
	fullText: string,
	limit: number = 100,
	cutOff: string = '...',
): string {
	if (fullText.length <= limit) {
		return fullText;
	}

	return `${fullText.slice(0, limit - cutOff.length)}${cutOff}`;
}
