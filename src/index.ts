import {Webord} from '../node_modules/webord-plugin/lib/index';
import {HelloWorld} from './screens/HelloWorld';

class HelloWorldExamplePlugin {
	WebordVal: typeof Webord = window.Webord || Webord;

	init = () => {
		if (!this.WebordVal) {
			throw new Error('Webord is not defined');
		}

		this.WebordVal.registerCategory({
			key: 'hello-world',
			name: 'Hello World from Plugin',
			path: '/hello-world',
		});

		this.WebordVal.registerLink({
			key: 'hello-world',
			name: 'Hello World',
			path: '/',
			categoryKey: 'hello-world',
			component: HelloWorld,
		});
	};
}
declare const window: any;
if (typeof window !== 'undefined') {
	window.HelloWorldExamplePlugin = HelloWorldExamplePlugin;
}

export default HelloWorldExamplePlugin;
