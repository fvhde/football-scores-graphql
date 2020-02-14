const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const jwt = require('express-jwt');
const env = require('./config/env');

const auth = jwt({
  secret: env.JWTSecret,
  credentialsRequired: false
})

// Initialize the app
const app = express();

//Get GraphQl schemas
const schema = require('./middlewares/graphql.middleware');

// The GraphQL endpoint
app.use('/api', bodyParser.json(), auth, graphqlExpress(req => ({
    schema,
    context: {
      user: req.user
    }
  }))
 );

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/api' }));

// Start the server
app.listen(env.port, () => {
  console.log('\n Graphql endpoint at localhost:' + env.port + '/api, \n\n Visual editor at localhost:' + env.port + '/graphiql');
});