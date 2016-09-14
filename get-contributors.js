var download = require('./download-image');
var gitRequest = require('./github-request');
var doesFolderExist = require('./does-folder-exist');

module.exports = {
  getRepoContributors: function(repoOwner, repoName, cb) {
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

      //doesFileExist executes to check for directory, if it doesn't create one
      doesFolderExist('/vagrant/week2day2/avatars');

      avatarUrl.forEach(function (avatarUrl, index) {
        var filePath = `./avatars/image-${index}.jpg`;
        download.downloadImageByURL(avatarUrl, filePath);
      });
    });
  }
}