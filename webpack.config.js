const path = require('path');

module.exports = (env) => {
    const isDev = env ? env.dev : false;

    return {
        mode: isDev ? 'development' : 'production',
        cache: isDev ? true : false,
        devtool: isDev ? 'inline-source-map' : '',
        entry: './src',
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist',
            filename: 'app.bundle.js',
        },
        target: 'electron-renderer',
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
            ],
        },
        resolve: {
            extensions: ['.js', '.elm'],
        },
        plugins: [],
    };
};
