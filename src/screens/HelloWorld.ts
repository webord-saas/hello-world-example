import React = require('react');

export const HelloWorld = () => {
	return React.createElement(
		'div',
		null,
		React.createElement('h1', null, 'Hello World from Plugin')
	);
};
