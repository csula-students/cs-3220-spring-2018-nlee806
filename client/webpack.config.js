const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'app.bundle.js',
<<<<<<< HEAD
		path: path.join(__dirname, '..', 'src', 'main', 'webapp', 'js')
=======
		path: path.join(__dirname, '..', 'dest')
>>>>>>> Added changes to files and am very confused.
	},
	devtool: 'source-map',
	module: {
		rules: [
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
		]
	}
};
