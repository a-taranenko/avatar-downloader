require('dotenv').config();

var request = require('request');
var fs = require('fs');
var token = process.env.DB_TOKEN;

function githubRequest(endpoint, callback) {
  var requestData = {
    url: `https://api.github.com${endpoint}`,
    auth: {
      bearer: token
    },
    headers: {
      'User-Agent': 'Mozilla...'
    }
  }

  request.get(requestData, callback);
}

function getRepoContributors(repoOwner, repoName, cb) {
  githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, (err, response, body) => {
    var data = JSON.parse(body);
    var avatarUrl = [];

    data.forEach(function(contributor) {
      avatarUrl.push(contributor.avatar_url);
    });

    avatarUrl.forEach(function (avatarUrl, index) {
      var filePath = `./avatars/image-${index}.jpg`;
      downloadImageByURL(avatarUrl, filePath);
    });
  });
}

function downloadImageByURL(url, filePath) {
  request(url, function(err, response, body) {
    if (err) {
      throw err;
    }

    fs.writeFile(filePath, body, function() {
      if (err) {
        throw err;
      }
      console.log('Successfully wrote to', filePath);
    });
  });
}

getRepoContributors(process.argv[2], process.argv[3], downloadImageByURL);