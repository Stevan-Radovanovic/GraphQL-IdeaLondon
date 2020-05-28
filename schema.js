const {buildSchema} = require('graphql'); 

module.exports = buildSchema(`

  type Product {
      _id: ID!
      title: String!
      price: String!
  }

  input ProductInputData {
      title: String!
      price: String!
  }

  type RootQuery {
    hello: String   
  }

  type RootMutation {
    createProduct(input: ProductInputData): String
  }

  schema {
      query: RootQuery,
      mutation: RootMutation
  }
`);