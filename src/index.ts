import {Webord} from '../node_modules/webord-plugin/lib/index';
import {HelloWorld} from './screens/HelloWorld';

declare const window: any;

let WebordValue = window.Webord || Webord;

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
