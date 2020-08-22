const path = require('path');

module.exports = {
    mode: 'production',
    output: {
        filename: 'app.[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].js',
    },
};
