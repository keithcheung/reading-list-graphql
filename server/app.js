const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// allow cross-origin request
app.use(cors());

// connect to mongodb
mongoose.connect(
  'mongodb://keithcheung:test123@ds147070.mlab.com:47070/gql-booklist'
);
mongoose.connection.once('open', () => {
  console.log('MongoDB Connected');
});
// express middleware
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('Now listening on port 4000');
});
