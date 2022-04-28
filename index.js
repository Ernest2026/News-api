const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
