let express = require('express');
let graphqlHTTP = require('express-graphql');
let schema = require("./schema");
let resolver = require("./resolvers");
let mongoose = require('mongoose');

let app = express();

mongoose
  .connect(
    'mongodb+srv://stevan:Stevan.1@cluster0-yxv9s.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(() => {
    console.log('Connection to the database failed');
  });

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true,
}));

app.listen(4000, () => console.log('GraphQl Practice'));