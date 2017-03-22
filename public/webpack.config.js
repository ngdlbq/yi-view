var path = require('path'),
	webpack = require('webpack'),
	HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: path.join(__dirname, 'js/index.js'),
		vendor: ['react','react-dom']
	},
	output: {
		path: path.join(__dirname,'build'),
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
	// resolve: {
	// 	extensions: ['','.js','.jsx']
	// },
	plugins: [
		new webpack.ProvidePlugin({

		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'js/vendor.js'
		}),
		new HtmlwebpackPlugin({
			template: path.join(__dirname, './int/index.html'),
			filename: '../view/index.html',
			chunks: ['vendor','index'],
			title: '易商品',
			hash: true
		})
	]
}