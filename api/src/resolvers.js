const typeDefs = require("./schema");

const { User, Pet } = typeDefs;

/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

console.log(typeDefs.name);
module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input);
    },
    pet(_, { input }) {
      return ctx.models.Pet.findone(input);
    },
  },
  // Mutation: {},
  // Pet: {
  //   img(pet) {
  //     return pet.type === "DOG"
  //       ? "https://placedog.net/300/300"
  //       : "http://placekitten.com/300/300";
  //   },
  // },
  // User: {},
};
