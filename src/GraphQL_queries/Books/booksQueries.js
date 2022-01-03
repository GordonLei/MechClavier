import { useQuery } from "@apollo/client";
//  import gql
const books_gql = require("./booksGQL");

const useGetAllBooks_AllFields = () => {
  return useQuery(books_gql.ALL_QUERY).data;
};
//const { data } = useQuery(FEED_QUERY);

const bookQueries = { getAllBooks_AllFields: useGetAllBooks_AllFields };

module.exports = bookQueries;
