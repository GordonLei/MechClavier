const { gql } = require("@apollo/client");

const ALL_QUERY = gql`
  {
    keyboards {
      startDate
    }
  }
`;

const keyboards_gql = { ALL_QUERY: ALL_QUERY };
module.exports = keyboards_gql;
