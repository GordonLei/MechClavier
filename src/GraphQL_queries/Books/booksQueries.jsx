const { gql, useQuery } = require("@apollo/client");
//const books_gql = require("./booksGQL");

const ALL_QUERY = gql`
  {
    books {
      author
      title
    }
  }
`;

const useGetAllBooks_AllFields = () => {
  const { loading, error, data } = useQuery(ALL_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    return data.books[0].title;
  }
  console.log(data);
  return data;
};

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

function Dogs() {
  const { loading, error, data } = useQuery(GET_DOGS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return data;
}

const bookQueries = {
  getAllBooks_AllFields: useGetAllBooks_AllFields,
  dogs: Dogs,
};

module.exports = bookQueries;
