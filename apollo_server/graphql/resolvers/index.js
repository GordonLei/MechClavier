const bookResolvers = require("./Books");
const keyboardsResolvers = require("./Keyboards");
//import { DateTimeTypeResolver } from "graphql-scalars";
//const { DateTimeTypeResolver } = require("graphql-scalars");

const resolvers = {
  Query: {
    ...bookResolvers.Query,
    ...keyboardsResolvers.Query,
  },
  //...DateTimeTypeResolver,
};

module.exports = resolvers;
