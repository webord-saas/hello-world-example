import {HelloWorld} from './screens/HelloWorld';

declare const window: any;

let WebordValue = window.WebordPlugin;

WebordValue.registerCategory({
	key: 'hello-world',
	name: 'Hello World from Plugin',
	path: '/hello-world',
});

WebordValue.registerLink({
	key: 'hello-world',
	name: 'Hello World',
	path: '/',
	categoryKey: 'hello-world',
	component: HelloWorld,
});

console.log('Hello World from Plugin');
