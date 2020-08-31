const { gql } = require("graphql-tag");
const { ApolloServer } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User!
  }
`;
const resolver = {
  Query: {
    me() {
      return {
        email: "yoda@masters.com",
        avatar: "http://yoda.png",
        friends: [],
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000).then(() => {
  console.log("YOU MADE A GRAPHQL SERVER");
});
module.exports = typeDefs;
