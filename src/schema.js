const fetch = require('node-fetch');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const ModType = new GraphQLObjectType({
    name: 'Mod',
    description: 'A minecraft mod',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: (mod) => mod.id,
        },
        name: {
            type: GraphQLString,
            resolve: (mod) => mod.name,
        },
    }),
});

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: '...',

        fields: () => ({
            mod: {
                type: ModType,
            },
        }),
    }),
});
