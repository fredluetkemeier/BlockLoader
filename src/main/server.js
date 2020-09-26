const express = require('express');
const path = require('path');

function startServer(port) {
    const app = express();

    app.use(
        '/assets',
        express.static(path.join(__dirname, '../../assets'), {
            cacheControl: true,
            maxAge: 24 * 60 * 1000,
        })
    );
    app.use('/dist', express.static(path.join(__dirname, '../../dist')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../assets/index.html'));
    });

    return app.listen(port);
}

module.exports = {
    startServer,
};
