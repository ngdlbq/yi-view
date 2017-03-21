var path = require('path'),
	webpack = require('webpack'),
	HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: path.join(__dirname, '/js/app.js')
	},
	output: {
		path: 'build',
		filename: 'js/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	},
	resolve: {
		alias: {

		}
	},
	plugins: [
		new webpack.ProvidePlugin({

		}),
		new HtmlwebpackPlugin({
			template: path.join(__dirname, '/view/index.html'),
			filename: 'view/index.html',
			chunks: ['index']
		})
	]
}