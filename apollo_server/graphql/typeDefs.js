const { gql } = require("apollo-server");
//import { DateTimeTypeDefinition } from "graphql-scalars";
//const { DateTimeTypeDefinition } = require("graphql-scalars");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

const typeDefs = gql`
  scalar DateTime
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type KeyboardProperties {
    caseWeight: String
    plateMaterials: [String]
    layout: [String]
    caseColors: [String]
    typingAngle: String
    mountingType: String
  }

  type Links {
    keyboardInformation: String
    images: String
  }

  type Vendor {
    US: String
  }

  type VendorName {
    US: String
  }

  type Keyboards {
    basePrice: String
    designer: String
    endDate: String
    images: [String]
    keyboardProperties: KeyboardProperties
    links: Links
    name: String
    saleType: String
    startDate: String
    vendor: Vendor
    vendorNames: VendorName
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]!
    keyboards: [Keyboards]!
  }
`;

//add DateTimeTypeDescription
//const typeDefs = { ...DateTimeTypeDefinition, ...typeDefsGQL };
module.exports = typeDefs;
