import {Webord} from 'webord-plugin';

const HelloWorld = () => {
	return (document.createElement('p').innerHTML = 'Hello World from Plugin');
};

let WebordValue: typeof Webord = (window as any).WebordPlugin;

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

const onUnmount = () => {
	WebordValue.removeCategory('hello-world');
	WebordValue.removeLink('hello-world');
};

WebordValue.registerAction({name: 'onUnmount', exec: onUnmount});

console.log('Hello World from Plugin');
