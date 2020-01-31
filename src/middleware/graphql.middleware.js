const fs = require('fs');
const { makeExecutableSchema }  = require('graphql-tools');

const footballService = require('../service/football.service');

const schema = makeExecutableSchema({
    typeDefs: fs.readFileSync('src/graphql/schemas.graphql', 'utf8'),
    resolvers: {

      Query: {
        competitions: (_, filters) => footballService.getCompetitions(filters),
      },

    }
});


module.exports = schema;