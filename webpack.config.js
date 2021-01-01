const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => {
    const isDev = process.env.NODE_ENV !== 'production';

    return {
        mode: isDev ? 'development' : 'production',
        cache: isDev ? true : false,
        entry: {
            app: './src/renderer/index.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist',
            filename: '[name].[contenthash].js',
        },
        target: 'electron-renderer',
        module: {
            rules: [
                {
                    test: /\.elm$/,
                    exclude: [/elm-stuff/, /node_modules/],
                    use: [
                        {
                            loader: 'elm-webpack-loader',
                            options: {
                                cwd: __dirname,
                                pathToElm: 'node_modules/.bin/elm',
                            },
                        },
                    ],
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.elm'],
        },
        plugins: [
            new HtmlWebpackPlugin({
                cache: false,
                chunks: ['app'],
                template: path.join(__dirname, 'templates/index.html'),
                filename: 'index.html',
                inject: 'body',
            }),
            new CleanWebpackPlugin(),
        ],
    };
};
