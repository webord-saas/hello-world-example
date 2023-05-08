import {Webord} from 'webord-plugin';
import {HelloWorld} from './screens/HelloWorld.ts';

export const init = () => {
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
