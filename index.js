const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const env = require('./src/config/env');

// Initialize the app
const app = express();

const schema = require('./src/middleware/graphql.middleware');

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(env.port, () => {
  console.log('\n Graphql endpoint at localhost:' + env.port + '/graphql, \n\n Visual editor at localhost:' + env.port + '/graphiql');
});