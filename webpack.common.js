const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.js', '.elm'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'mpm',
            inject: 'body',
            template: path.resolve(__dirname, 'template.html'),
            favicon: path.resolve(__dirname, 'favicon.ico'),
        }),
    ],
};
