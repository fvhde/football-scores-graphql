const request = require('request-promise');
const baseUrl = 'http://api.football-data.org/v2/';
const token = '98b88790dd19469db5807314dd2317f4';

var options = {
    url: '',
    headers: {
      'X-Auth-Token': token
    }
};

async function getCompetitions(filters)
{
    options.url = baseUrl + 'competitions';
    let result = await request(options);
    result = JSON.parse(result);
    return result.competitions;
}

async function getTeams(filters)
{
    options.url = baseUrl + 'competitions/' + filters.competitionId + '/teams';
    try {
        let result = await request(options);
        result = JSON.parse(result);
        return result.teams;
    }
    catch (e) {
        return e.message;
    }
}

async function getMatches(filters)
{
    options.url = baseUrl + 'competitions/' + filters.competitionId + '/matches';
    let result = await request(options);
    result = JSON.parse(result);
    return result.matches;
}

module.exports = {
    getCompetitions,
    getTeams,
    getMatches
};