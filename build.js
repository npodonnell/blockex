const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const compiler = webpack(webpackConfig)

compiler.run((err, stats) => {
	const jsonStats = stats.toJson()

	if (err) {
		console.error("there was an error")
	} else if (stats) {
		console.log("compiled ok")
	}
})
