const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
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