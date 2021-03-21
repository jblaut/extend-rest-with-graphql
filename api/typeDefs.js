const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type info {
    url: String
    name: String
    posts: String
    description: String
    ask: String
  }

  type Query {
    info: info!
  }
`
module.exports = typeDefs
