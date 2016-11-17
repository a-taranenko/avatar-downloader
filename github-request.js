require('dotenv').config();

var request = require('request');
var fs = require('fs');
var token = process.env.DB_TOKEN;

// If you can't get the token throw an error
if (!token) {
  throw new Error('Unable to get token');
}

module.exports = {
  githubRequest: function(endpoint, callback) {
    var requestData = {
      url: `https://api.github.com${endpoint}`,
      auth: {
        bearer: token
      },
      headers: {
        'User-Agent': 'Mozilla...'
      }
    }

    request(requestData, callback);
  }
}