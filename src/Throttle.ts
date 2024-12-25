export function throttle(f: (...args: any[]) => void, delay = 500) {
	let timer: ReturnType<typeof setTimeout> | null = null;

	return function (...args: any[]) {
		if (timer) return;
		f.apply(this, args);
		timer = setTimeout(() => (timer = null), delay);
	};
}

const helper = (arg: any) => {
	console.log('Called', arg);
};

const f = throttle(helper);
f(1);
f(2);
setTimeout(() => {
	f(3);
}, 200);
