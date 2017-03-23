const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanPlugin = require('clean-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
      'babel-polyfill',
      path.join(__dirname, 'src/app')
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].bundle.js",
    publicPath: 'http://localhost:8080/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)$/,
        use: [ "babel-loader" ],
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'src')
    ]
  },
  plugins: [
    new CleanPlugin('dist'),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: Infinity,
    //   filename: 'vendor.bundle.js'
    // }),
    new webpack.LoaderOptionsPlugin({
      options: { context: __dirname },
      debug: true
    }),
    new webpack.BannerPlugin({banner: 'Banner', raw: true, entryOnly: true}),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: { warnings: false },
      minimize: true
    })
  ],
  devtool: 'source-map'
};
