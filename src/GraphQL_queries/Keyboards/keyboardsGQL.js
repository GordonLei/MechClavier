const { gql } = require("@apollo/client");

const ALL_QUERY = gql`
  {
    keyboards {
      basePrice
      designer
      endDate
      images
      keyboardProperties {
        caseWeight
        plateMaterials
        layout
        caseColors
        typingAngle
        mountingType
      }
      links {
        keyboardInformation
        images
      }
      name
      saleType
      startDate
      vendor {
        US
      }
      vendorNames {
        US
      }
    }
  }
`;

const keyboards_gql = { ALL_QUERY: ALL_QUERY };
module.exports = keyboards_gql;
