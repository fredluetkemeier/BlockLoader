const fetch = require('node-fetch');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { ModType } = require('./types/Mod');

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        description: 'The root query object',

        fields: () => ({
            mod: {
                type: ModType,
                args: {
                    id: { type: GraphQLString },
                },
                resolve: (root, args) =>
                    fetch(
                        `https://addons-ecs.forgesvc.net/api/v2/addon/${args.id}`
                    ).then((response) => response.json()),
            },
        }),
    }),
});
