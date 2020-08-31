const { gql } = require("apollo-server");
const { ApolloServer } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: String
    username: String
  }

  type Pet {
    id: String
    createdAt: Number
    name: String
    type: String
  }
`;

module.exports = typeDefs;
