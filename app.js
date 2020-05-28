let express = require('express');
let graphqlHTTP = require('express-graphql');
let schema = require("./schema");
let resolver = require("./resolvers");


let app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.listen(4000, () => console.log('GraphQl Practice'));