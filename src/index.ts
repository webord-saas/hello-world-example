import {Webord} from '../node_modules/webord-plugin/lib/index';
import {HelloWorld} from './screens/HelloWorld';

export const HelloWorldPlugin = (Webord: any) => {
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
			component: HelloWorld,
		});
	};
};
