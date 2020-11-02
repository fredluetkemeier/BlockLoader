const express = require('express');
const path = require('path');
const axios = require('axios');

function startServer(port) {
    const app = express();

    app.use(express.json());

    app.use(
        '/assets',
        express.static(path.join(__dirname, '../../assets'), {
            cacheControl: true,
            maxAge: 24 * 60 * 1000,
        })
    );
    app.use('/dist', express.static(path.join(__dirname, '../../dist')));

    app.use('/graphql', async (req, res) => {
        axios({
            url: 'https://www.blockloader.io/graphql',
            method: 'POST',
            data: req.body,
        })
            .then((response) => res.send(response.data))
            .catch((response) => res.sendStatus(response.status));
    });

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../../assets/index.html'));
    });

    return app.listen(port);
}

module.exports = {
    startServer,
};
