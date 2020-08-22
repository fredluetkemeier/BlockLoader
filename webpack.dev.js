const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    cache: true,
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        index: 'index.html',
        compress: true,
        open: true,
        openPage: 'dist/index.html',
        publicPath: '/dist',
        hot: true,
        port: 9000,
    },
    output: {
        filename: 'app.js',
        chunkFilename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                use: [
                    { loader: 'elm-hot-webpack-loader' },
                    {
                        loader: 'elm-webpack-loader',
                        options: {
                            cwd: __dirname,
                            pathToElm: 'node_modules/.bin/elm',
                            optimize: false,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin()],
});
