const {buildSchema} = require('graphql'); 

module.exports = buildSchema(`

  type Product {
      _id: ID!
      title: String!
      price: Float!
  }

  input ProductInputData {
      title: String!
      price: Float!
  }

  input ProductUpdateData {
    _id: String!
    title: String
    price: Float
  }

  type RootQuery {
    startingQuery: String   
    returnAllProducts: [Product]
  }

  type RootMutation {
    createProduct(input: ProductInputData): String
    deleteProductById(_id: String): String
    updateProduct(input: ProductUpdateData): String
  }

  schema {
      query: RootQuery,
      mutation: RootMutation
  }
`);