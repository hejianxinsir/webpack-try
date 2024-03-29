// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {
// 	CleanWebpackPlugin
// } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	// entry: {
	// 	app: './src/index.js',
	// 	print: './src/print.js',
	// },
	// devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	devtool: 'inline-source-map'
	// plugins: [
	// 	new CleanWebpackPlugin({
	// 		cleanStaleWebpackAssets: false
	// 	}),
	// 	new HtmlWebpackPlugin({
	// 		title: 'Development',
	// 	}),
	// ],
	// output: {
	// 	filename: '[name].bundle.js',
	// 	path: path.resolve(__dirname, 'dist'),
	// },
};