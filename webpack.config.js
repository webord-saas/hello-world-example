const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = {
	entry: {
		'index': './src/index.ts',
		'index.min': './src/index.ts',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		libraryTarget: 'umd',
		library: 'HelloWorldExample',
		umdNamedDefine: true,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
	},
	devtool: 'source-map',
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [new CheckerPlugin()],
};
