const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

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
        thumbnail: {
            type: ThumbnailType,
            resolve: (mod) =>
                mod.attachments.find((attachment) => attachment.isDefault) ||
                attachments[0],
        },
    }),
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    description: 'The author of a mod',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: (author) => author.id,
        },
        name: {
            type: GraphQLString,
            resolve: (author) => author.name,
        },
    }),
});

const ThumbnailType = new GraphQLObjectType({
    name: 'Thumbnail',
    description: 'The thumbnail belonging to a mod',

    fields: () => ({
        id: {
            type: GraphQLString,
            resolve: (thumbnail) => thumbnail.id,
        },
        url: {
            type: GraphQLString,
            resolve: (thumbnail) => thumbnail.thumbnailUrl,
        },
        title: {
            type: GraphQLString,
            resolve: (thumbnail) => thumbnail.title,
        },
    }),
});

module.exports = {
    ModType,
};
