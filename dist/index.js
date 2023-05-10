!(function (e, o) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = o())
		: 'function' == typeof define && define.amd
		? define('HelloWorldExample', [], o)
		: 'object' == typeof exports
		? (exports.HelloWorldExample = o())
		: (e.HelloWorldExample = o());
})(self, () =>
	(() => {
		'use strict';
		let e = window.WebordPlugin;
		return (
			e.registerCategory({
				key: 'hello-world',
				name: 'Hello World from Plugin',
				path: '/hello-world',
			}),
			e.registerLink({
				key: 'hello-world',
				name: 'Hello World',
				path: '/',
				categoryKey: 'hello-world',
				component: () =>
					(document.createElement('p').innerHTML = 'Hello World from Plugin'),
			}),
			console.log('Hello World from Plugin'),
			{}
		);
	})()
);
//# sourceMappingURL=index.js.map
