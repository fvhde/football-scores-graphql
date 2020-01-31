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

module.exports = {
  getCompetitions,
};