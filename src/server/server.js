const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const PORT = 4000;

const app = express();
const schema = require('./schema');

app.post(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: false,
    })
);

app.get(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}...`);
