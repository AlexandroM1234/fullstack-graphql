/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets(_, { input }, ctx) {
      return ctx.models.Pet.findMany(input);
    },
    pet(_, { input }, ctx) {
      return ctx.models.Pet.findOne(input);
    },
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      return ctx.models.Pet.create(input);
    },
  },
};
