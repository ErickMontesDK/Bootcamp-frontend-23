 const HtmlWebpackPlugin = require('html-webpack-plugin');
 
 module.exports = {
   entry: {
     app: './src/index.js',
   },
   output: {
     filename: '[name].js',
     clean: false,
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader' ],
      },
    ],
   },
   plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
 };