var fs = require('fs');
var request = require('request');

module.exports = {
  downloadImageByURL: function(url, filePath) {
    request({"uri": url, "encoding": null}, function(err, response, body) {
      if (err) {
        throw err;
      }

      fs.writeFile(filePath, body, function(err) {
        if (err) {
          throw err;
        }
        console.log('Successfully wrote to', filePath);
      });
    });
  }
};