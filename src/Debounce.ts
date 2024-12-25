export function debounce(f: (...args: any[]) => void, delay = 500) {
	let timer: NodeJS.Timeout;

	return function (...args: any[]) {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => {
			f.apply(this, args);
		}, delay);
	};
}
function helper(args: any) {
	console.log('Called', args, 'with this:', this);
}

const debounce1 = debounce(helper, 500);

debounce1();

const obj = {
	name: 'Example',
	debouncedHelper: debounce(helper, 500),
};

obj.debouncedHelper('hello');
