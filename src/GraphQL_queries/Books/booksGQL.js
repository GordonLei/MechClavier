import { gql } from "@apollo/client";

const ALL_QUERY = gql`
  {
    books {
      author
      title
    }
  }
`;

const books_gql = { ALL_QUERY: ALL_QUERY };
module.exports = books_gql;
