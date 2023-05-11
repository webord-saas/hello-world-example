import {Webord} from 'webord-plugin';
import {HelloWorld} from './screens/HelloWorld';

let WebordValue: typeof Webord = (window as any).WebordPlugin;

WebordValue.registerCategory({
	key: 'hello-world',
	name: 'Hello World Category',
	path: '/',
});

WebordValue.registerLink({
	key: 'hello-world',
	name: 'Hello World from Plugin',
	path: '/hello-world',
	categoryKey: 'hello-world',
	component: <HelloWorld />,
});

Webord.registerAction({
	name: 'removePlugin',
	exec: () => {
		Webord.removeCategory('hello-world');
		Webord.removeLink('hello-world');
	},
});
