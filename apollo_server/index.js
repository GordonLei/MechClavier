//  require some initial libraries
const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
//  require the dotenv
require("dotenv").config();
//  require files that would be necessary for GraphQL to function
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

//  connect to the mongoDB server
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    //  if this is connected, now start the GraphQL server

    // The `listen` method launches a web server.
    return server.listen({ port: 5000 });
    /*
    server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    });
    */
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
