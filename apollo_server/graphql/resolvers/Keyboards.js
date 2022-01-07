//  get the books model
const Keyboards = require("../../models/Keyboards");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const keyboardsResolvers = {
  Query: {
    keyboards: async () => await Keyboards.find(),
  },
};

module.exports = keyboardsResolvers;
