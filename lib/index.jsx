define([
	'require',
	'exports',
	'../node_modules/webord-plugin/lib/index',
	'./screens/HelloWorld',
], function (require, exports, index_1, HelloWorld_1) {
	'use strict';
	Object.defineProperty(exports, '__esModule', {value: true});
	exports.init = void 0;
	const init = () => {
		index_1.Webord.registerCategory({
			key: 'hello-world',
			name: 'Hello World from Plugin',
			path: '/hello-world',
		});
		index_1.Webord.registerLink({
			key: 'hello-world',
			name: 'Hello World',
			path: '/',
			categoryKey: 'hello-world',
			component: <HelloWorld_1.HelloWorld />,
		});
	};
	exports.init = init;
});
