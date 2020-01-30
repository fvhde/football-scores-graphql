const request = require('request');
const baseUrl = 'http://api.football-data.org/v2/';
const token = '98b88790dd19469db5807314dd2317f4';

var options = {
    url: '',
    headers: {
      'X-Auth-Token': token
    }
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      console.log(info);
    }
}


exports.getCompetitions = async () =>
{
    options.url = baseUrl + 'competitions';
    request(options, callback);
}