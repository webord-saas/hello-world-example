import {Webord} from 'webord-plugin';

const HelloWorld = () => {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<h1>Hello World from Plugin</h1>
		</div>
	);
};

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
