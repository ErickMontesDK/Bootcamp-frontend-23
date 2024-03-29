const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        },
    devServer: {
        port: 5000
      }
});