var contributors = require('./get-contributors');

//Code that checks for the correct number of arrguments
if (process.argv.length === 4) {
  var user = process.argv[2];
  var repo = process.argv[3];
} else {
  throw new Error('The number of arguments is not correct');
}

contributors.getRepoContributors(user, repo);