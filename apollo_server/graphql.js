//  require some initial libraries
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
//  require the dotenv
require("dotenv").config();
//  require files that would be necessary for GraphQL to function
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

//  connect to the mongoDB server
mongoose
  .connect(process.env.MONGODB, { useNewURLParser: true })
  .then(() => {
    console.log("MongoDB Connected");
    //  if this is connected, now start the GraphQL server

    // The `listen` method launches a web server.
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
