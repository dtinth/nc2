var webpack = require('webpack')
var _ = require('lodash')

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
})

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    'babel-core/polyfill',
    './src/index.css',
    './src/index.js',
  ],
  output: {
    path: __dirname + '/static/',
    publicPath: '/static/',
    filename: 'bundle.js',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    devFlagPlugin,
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style', 'css-loader?module&localIdentName=[name]の[local]', 'cssnext-loader'] },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json'],
  },
}

_.assign(config, {
  devServer: {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true, chunkModules: false },
  }
})

module.exports = config
