const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/client',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.elm'],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'mpm',
            inject: 'body',
            template: path.resolve(__dirname, 'template.html'),
            favicon: path.resolve(__dirname, 'favicon.ico'),
        }),
    ],
};
