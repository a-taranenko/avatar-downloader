var assert = require('chai').assert;
var doesFileExist = require('./does-file-exist');
var isNumberArgumentsCorrect = require('./number-of-args');
//var doOwnerRepoExist = require('./owner-repo-existence');

/*describe('File existence:', function() {
  it('should return true if file exists', function() {
    var folder = 'avatars';
    doesFileExist(folder, function(exists) {
      assert.isTrue(exists);
    });
  });

  it('should return false if file does not exist', function() {
    var folder = 'avatars';
    doesFileExist(folder, function(exists) {
      assert.isFalse(exists);
    });
  });
});*/

describe('Number of arguments:', function() {
  it('should return false if the number of arguments is incorrect', function() {
    var numberOfArgs = 3;
    isNumberArgumentsCorrect(numberOfArgs, function(statement) {
      assert.isFalse(statement);
    });
  });

  it('should return false if the number of arguments is incorrect', function() {
    var numberOfArgs = 1;
    isNumberArgumentsCorrect(numberOfArgs, function(statement) {
      assert.isFalse(statement);
    });
  });

  it('should return true if the number of arguments is correct', function() {
    var numberOfArgs = 2;
    isNumberArgumentsCorrect(numberOfArgs, function(statement) {
      assert.isTrue(statement);
    });
  });
});

