const fetch = require('node-fetch');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
} = require('graphql');

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
        authors: {
            type: GraphQLList(AuthorType),
            resolve: (mod) => mod.authors,
        },
    }),
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'The author of a mod',

    fields: () => ({
        name: {
            type: GraphQLString,
            resolve: (author) => author.name,
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
