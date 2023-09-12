/**
 * Fix up a path with slashes so that it starts with a single slash, ends with
 * a single slash, and contains no double slashes in between.
 */
export function slashPath(raw: string): string {
	if (!raw) {
		return '/';
	}

	const stripped = raw
		.trim()
		.replace(/^\/+|\/+$/g, '')
		.split('/')
		.filter(p => p && p.length)
		.join('/');
	return `/${stripped}`;
}

// Export function stripEmptyValues<
// 	T extends
// 	| {
// 		[key: string]: any;
// 	}
// 	| undefined
// >(input: T): T {
// 	if (!input) {
// 		return {} as T;
// 	}
// 	return Object.entries(input).reduce(
// 		(stripped: T, [key, value]: [string, any]) => {
// 			if (key && value) {
// 				// @ts-ignore
// 				stripped[key] = value;
// 			}
// 			return stripped;
// 		},
// 		{} as T,
// 	);
// }
