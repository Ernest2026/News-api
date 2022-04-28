const { gql } = require("apollo-server");

const typeDefs = gql`
  type News {
    logo: String
    image: String
    header: String
    title: String
    subhead: String
    time: String
    tag: String
    source: String
  }
  type Query {
    news(category: String): [News]
  }
`;

module.exports = {
  typeDefs,
};
