var webpack = require('webpack');
var failPlugin = require('webpack-fail-plugin');

module.exports = {
  entry: ["./src/global.ts", "./src/app.ts"],
  output: {
    filename: "dist/bundle.js"
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    failPlugin
  ],

  resolve: {
    //extensions: ['', '.js', '.es6']
    //extensions: ['', '.ts']
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
     { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },

  devServer: {
    contentBase: "./dist"
  }
}


