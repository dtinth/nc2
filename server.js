var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

void (new WebpackDevServer(webpack(config), config.devServer)
  .listen(3333, 'localhost', function (err, result) {
    if (err) {
      console.log(err)
    }
    console.log('Listening at localhost:3333')
  })
)
