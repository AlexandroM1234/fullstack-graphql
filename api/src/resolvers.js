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
      console.log("Query => Pet");
      return ctx.models.Pet.findOne(input);
    },
  },
  Mutation: {
    newPet(_, { input }, ctx) {
      return ctx.models.Pet.create(input);
    },
  },
  Pet: {
    owner(_, __, ctx) {
      console.log("PET => owner");
      return ctx.models.User.findOne();
    },
  },
  User: {
    pets(user, _, ctx) {
      console.log("User => Pets");
      return ctx.models.Pet.findMany();
    },
  },
};
