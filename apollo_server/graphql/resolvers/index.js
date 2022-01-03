const bookResolvers = require("./Books");

const resolvers = {
  Query: {
    ...bookResolvers.Query,
  },
};

module.exports = resolvers;
