const fs = require('fs');
const { makeExecutableSchema }  = require('graphql-tools');
const footballService = require('../service/football.service');

const schema = makeExecutableSchema({
    typeDefs: fs.readFileSync('src/graphql/schemas.graphql', 'utf8'),
    resolvers: {
      Query: {
          competition:(_, filters) => footballService.getCompetitions(filters),
          competitions: (_, filters) => footballService.getCompetitions(filters),
          team: (_, filters) => footballService.getTeams(filters),
          teams: (_, filters) => footballService.getTeams(filters),
          match: (_, filters) => footballService.getMatches(filters),
          matches: (_, filters) => footballService.getMatches(filters),
          standings: (_, filters) => footballService.getStandings(filters),
          scorers: (_, filters) => footballService.getScorers(filters),
          player: (_, filters) => footballService.getPlayer(filters),
      },

    }
});

module.exports = schema;