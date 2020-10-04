const path = require('path');

module.exports = () => {
    const isDev = process.env.NODE_ENV !== 'production';

    return {
        mode: isDev ? 'development' : 'production',
        cache: isDev ? true : false,
        devtool: isDev ? 'inline-source' : '',
        entry: './src/renderer',
        output: {
            path: path.resolve(__dirname, 'assets'),
            publicPath: '/assets',
            filename: 'app.js',
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
    };
};
