import React = require('react');

export const HelloWorld = () => {
	return React.createElement('div', null, [
		React.createElement('h1', null, 'Hello World from Plugin'),
		React.createElement(
			'p',
			null,
			'You can edit this file at src/screens/HelloWorld.ts'
		),
	]);
};
