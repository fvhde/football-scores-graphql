const fs = require('fs');
const { makeExecutableSchema }  = require('graphql-tools');
const footballService = require('../service/football.service');

const schema = makeExecutableSchema({
    typeDefs: fs.readFileSync('src/graphql/schemas.graphql', 'utf8'),
    resolvers: {
      Query: {
          competition:(_, { id }) => footballService.getCompetitions(id),
          competitions: async (_, { offset = 0, limit = 10 }) => {
            let allCompetitions = await footballService.getCompetitions(0);
            return allCompetitions.slice(offset, offset + limit);
          },
          team: (_, { id }) => footballService.getTeams(0, id),
          teams: async (_, { competitionId, offset = 0, limit = 10}) =>{
             let allTeams = await footballService.getTeams(competitionId);
             return allTeams.slice(offset, offset + limit);
          },
          match: (_, { id }) => footballService.getMatches(0, id),
          matches: async (_, { competitionId, matchday, offset = 0, limit = 10}) => {
            let allMatches = await footballService.getMatches(competitionId, 0 , matchday);
            return allMatches.slice(offset, offset + limit);
          },
          standings: async (_, { competitionId, offset = 0, limit = 20 }) => {
            let allStandings = await footballService.getStandings(competitionId);
            return allStandings.slice(offset, offset + limit);
          },
          scorers: async (_, { competitionId, offset = 0, limit = 10}) => {
            let allScorers = await footballService.getScorers(competitionId);
            return allScorers.slice(offset, offset + limit);
          },
          player: (_, { id }) => footballService.getPlayer(id),
      },

    }
});

module.exports = schema;