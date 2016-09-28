'use strict';

let path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules');

const config = {
  entry: './src/app.js',
  resolve: {
    extensions: ['', '.jsx', '.js'],
    alias: {
      actions: `${ ROOT_PATH }/src/actions/`,
      reducers: `${ ROOT_PATH }/src/reducers/`,
      components: `${ ROOT_PATH }/src/components/`,
      containers: `${ ROOT_PATH }/src/containers/`,
      stores: `${ ROOT_PATH }/src/stores/`
    }
  },
  devServer: { inline: true },

  output: {
    path: './dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [NODE_MODULES_PATH],
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
