const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  # Enums are values that can replace types and make it so the input is only one you state
  enum Animal {
    DOG
    CAT
    FISH
    BIRD
    HAMSTER
  }

  type User {
    id: ID!
    username: String!
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: Animal!
    img: String!
    buddies: [Pet]
  }

  input PetsInput {
    name: String
    type: Animal
  }

  type Query {
    pets(input: PetsInput): [Pet]!
    pet(input: PetsInput): Pet
  }

  input newPetInput {
    name: String!
    type: Animal!
  }

  type Mutation {
    newPet(input: newPetInput): Pet!
  }
`;

module.exports = typeDefs;
