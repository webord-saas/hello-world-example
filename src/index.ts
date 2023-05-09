import {Webord} from '../node_modules/webord-plugin/lib/index';
import {HelloWorld} from './screens/HelloWorld';

declare const window: any;
let HelloWorldExamplePlugin = {
	Webord: <typeof Webord>window.Webord || Webord,

	init: () => {
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
			component: HelloWorld,
		});
	},
};

if (typeof window !== 'undefined') {
	window.HelloWorldExamplePlugin = HelloWorldExamplePlugin;
}

export default HelloWorldExamplePlugin;
