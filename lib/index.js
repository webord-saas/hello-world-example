let HelloWorldPlugin = define(
	['require', 'exports', './screens/HelloWorld'],
	function (require, exports, HelloWorld_1) {
		'use strict';
		Object.defineProperty(exports, '__esModule', {value: true});
		exports.HelloWorldPlugin = void 0;
		const HelloWorldPlugin = (Webord) => {
			const init = () => {
				Webord.registerCategory({
					key: 'hello-world',
					name: 'Hello World from Plugin',
					path: '/hello-world',
				});
				Webord.registerLink({
					key: 'hello-world',
					name: 'Hello World',
					path: '/',
					categoryKey: 'hello-world',
					component: HelloWorld_1.HelloWorld,
				});
			};
		};
		exports.HelloWorldPlugin = HelloWorldPlugin;
	}
);
