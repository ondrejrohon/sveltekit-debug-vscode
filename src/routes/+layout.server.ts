import type { LayoutServerLoad } from './$types';

export const load = (async () => {
	console.log('j');
	console.log('o');
	debugger;
	return {
		some: 'data'
	};
}) satisfies LayoutServerLoad;
