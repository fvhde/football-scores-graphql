const fs = require('fs');
const { makeExecutableSchema }  = require('graphql-tools');
const { User } = require('../models');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const footballService = require('../services/football.service');
const env = require('../config/env');

const schema = makeExecutableSchema({

    typeDefs: fs.readFileSync('graphql/schemas.graphql', 'utf8'),

    resolvers: {
        Query: {
          me: async (_, args, { user }) => {
            if (!user) {
              throw new Error('You are not authenticated!');
            }

            return await User.findByPk(user.id);
          },

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

      Mutation: {
        signup: async (_, { username, email, password }) => {
          const user = await User.create({
            username,
            email,
            password: await bcrypt.hash(password, 10)
          })

          return jsonwebtoken.sign(
            { id: user.id, email: user.email },
            env.JWTSecret,
            { expiresIn: '1y' }
          )
        },

        login: async (_, { email, password }) => {
          const user = await User.findOne({ where: { email } })

          if (!user) {
            throw new Error('No user with that email')
          }

          const valid = await bcrypt.compare(password, user.password)
          if (!valid) {
            throw new Error('Incorrect password')
          }

          return jsonwebtoken.sign(
            { id: user.id, email: user.email },
            env.JWTSecret,
            { expiresIn: '1d' }
          )
        }
    },
  }
});

module.exports = schema;