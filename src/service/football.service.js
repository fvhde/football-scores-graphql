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
    let matchDay = '';

    if(filters.matchday) {
        matchDay = '?matchday=' + filters.matchday;
    }

    options.url = baseUrl + 'competitions/' + filters.competitionId + '/matches' + matchDay;
    let result = await request(options);
    result = JSON.parse(result);
    return result.matches;
}

async function getStandings(filters)
{
    options.url = baseUrl + 'competitions/' + filters.competitionId + '/standings';
    let result = await request(options);
    result = JSON.parse(result);
    return result.standings;
}

async function getScorers(filters)
{
    options.url = baseUrl + 'competitions/' + filters.competitionId + '/scorers';
    let result = await request(options);
    result = JSON.parse(result);
    return result.scorers;
}

module.exports = {
    getCompetitions,
    getTeams,
    getMatches,
    getStandings,
    getScorers
};