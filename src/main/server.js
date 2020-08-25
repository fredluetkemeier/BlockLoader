const express = require('express');
const path = require('path');

function startServer(port) {
    const app = express();

    app.use('/assets', express.static(path.join(__dirname, '../../assets')));

    app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../assets/index.html'));
    });

    app.get('/graphql', (req, res) => {});

    return app.listen(port);
}

module.exports = {
    startServer,
};
