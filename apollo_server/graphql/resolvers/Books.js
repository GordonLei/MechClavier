//  get the books model
const Books = require("../../models/Books");

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const bookResolvers = {
  Query: {
    books: async () => await Books.find(),
  },
};

module.exports = bookResolvers;
