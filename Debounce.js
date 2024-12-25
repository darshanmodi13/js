function debounce(f, delay = 500) {
	console.log('outer this', this);
	let timer = null;

	return function (...args) {
		if (timer) clearTimeout(timer);
		console.log('Inner this', this);
		timer = setTimeout(() => {
			f.apply(this, args);
		}, delay);
	};
}
function helper(args) {
	console.log('Called', args, 'with this:', this);
}

const debounce1 = debounce(helper, 500);

debounce1();

const obj = {
	name: 'Example',
	debouncedHelper: debounce(helper, 500),
};

obj.debouncedHelper('hello');
