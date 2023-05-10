const HelloWorld = () => {
	return (document.createElement('p').innerHTML = 'Hello World from Plugin');
};

let WebordValue = (window as any).WebordPlugin;

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
