const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isDev = env ? env.dev : false;

    const devServerConfig = isDev
        ? {
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
          }
        : {};

    const devPlugins = isDev ? [new CleanWebpackPlugin()] : [];

    return {
        mode: isDev ? 'development' : 'production',
        cache: isDev ? true : false,
        devtool: isDev ? 'inline-source-map' : '',
        entry: './src/client',
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist/',
            filename: isDev ? 'app.js' : 'app.[contenthash:8].js',
            chunkFilename: isDev ? '[name].js' : '[name].[contenthash:8].js',
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
                                optimize: isDev ? false : true,
                                cache: false,
                            },
                        },
                    ],
                },
                {
                    test: /\.scss$/i,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
                    exclude: /node_modules/,
                    loader: 'file-loader',
                    options: {
                        name: isDev
                            ? '[name].[ext]'
                            : '[name].[contenthash:8].[ext]',
                    },
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.elm'],
        },
        plugins: [
            ...devPlugins,
            new MiniCssExtractPlugin({
                filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
                chunkFilename: isDev
                    ? '[name].css'
                    : '[name].[contenthash:8].css',
            }),
            new HtmlWebpackPlugin({
                title: 'mpm',
                inject: 'body',
                template: path.resolve(__dirname, 'template.html'),
                favicon: path.resolve(__dirname, 'logo.svg'),
                cache: false,
            }),
        ],
        ...devServerConfig,
    };
};
