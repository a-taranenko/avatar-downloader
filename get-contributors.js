var download = require('./download-image');
var gitRequest = require('./github-request');
var doesFolderExist = require('./does-folder-exist');

module.exports = {
  getRepoContributors: function(repoOwner, repoName) {
    gitRequest.githubRequest(`/repos/${repoOwner}/${repoName}/contributors`, (err, response, body) => {
      // If status is other than 200 then throw an error
      if (response['headers']['status'] !== '200 OK') {
        throw new Error('Wrong user/repo combo');
      }

      var data = JSON.parse(body);
      var avatarUrl = [];

      data.forEach(function(contributor) {
        avatarUrl.push(contributor.avatar_url);
      });

      // doesFileExist executes to check for directory, and creates one if there isn't one
      doesFolderExist('./avatars');

      avatarUrl.forEach(function(avatarUrl, index) {
        var filePath = __dirname + `/avatars/${index}.jpg`;

        download.downloadImageByURL(avatarUrl, filePath);
      });
    });
  }
}