const request = require('request-promise');
const baseUrl = 'http://api.football-data.org/v2/';
const env = require('../config/env');

var options = {
    url: '',
    headers: {
      'X-Auth-Token': env.apiToken
    }
};

async function getCompetitions(id)
{
    try{
        if(id != 0) {
            options.url = baseUrl + 'competitions/' + id;
            let result = await request(options);
            result = JSON.parse(result);
            return result;
        }

        options.url = baseUrl + 'competitions';
        let result = await request(options);
        result = JSON.parse(result);
        return result.competitions;
    }

    catch (e) {
        let error = JSON.parse(e.error);
        throw new Error(error.message);
    }
}

async function getTeams(competitionId, id=0)
{
    try {
        if(id != 0) {
            options.url = baseUrl + 'teams/' + id;
            let result = await request(options);
            result = JSON.parse(result);
            return result;
        }

        options.url = baseUrl + 'competitions/' + competitionId + '/teams';
        let result = await request(options);
        result = JSON.parse(result);
        return result.teams;
    }

    catch (e) {
        let error = JSON.parse(e.error);
        throw new Error(error.message);
    }
}

async function getMatches(competitionId, id=0 , matchday = null)
{
    try{
        if(id != 0) {
            options.url = baseUrl + 'matches/' + id;
            let result = await request(options);
            result = JSON.parse(result);
            return result.match;
        }

        let matchDay = '';

        if(matchday) {
            matchDay = '?matchday=' + matchday;
        }

        options.url = baseUrl + 'competitions/' + competitionId + '/matches' + matchDay;
        let result = await request(options);
        result = JSON.parse(result);
        return result.matches;
    }

    catch (e) {
        let error = JSON.parse(e.error);
        throw new Error(error.message);
    }
}

async function getStandings(competitionId)
{
    try {
        options.url = baseUrl + 'competitions/' + competitionId + '/standings';
        let result = await request(options);
        result = JSON.parse(result);
        return result.standings;
    }

    catch (e) {
        let error = JSON.parse(e.error);
        throw new Error(error.message);
    }
}

async function getScorers(competitionId)
{
    try {
        options.url = baseUrl + 'competitions/' + competitionId + '/scorers';
        let result = await request(options);
        result = JSON.parse(result);
        return result.scorers;
    }

    catch (e) {
        let error = JSON.parse(e.error);
        throw new Error(error.message);
    }
}

async function getPlayer(id) {
    try {
        options.url = baseUrl + 'players/' + id;
        let result = await request(options);
        result = JSON.parse(result);
        return result;
    }

    catch (e) {
        let error = JSON.parse(e.error);
        throw new Error(error.message);
    }
}

module.exports = {
    getCompetitions,
    getTeams,
    getMatches,
    getStandings,
    getScorers,
    getPlayer
};