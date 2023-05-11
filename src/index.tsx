import {Webord} from 'webord-plugin';

const HelloWorld = () => {
	return (
		<div>
			<h1>Hello World from Plugin</h1>
		</div>
	);
};

let WebordValue: typeof Webord = (window as any).WebordPlugin;

WebordValue.registerCategory({
	key: 'hello-world',
	name: 'Hello World from Plugin',
	path: '/',
});

WebordValue.registerLink({
	key: 'hello-world',
	name: 'Hello World',
	path: '/hello-world',
	categoryKey: 'hello-world',
	component: <HelloWorld />,
});
