var fs = require('fs');

function doesFolderExist(folderPath) {
  fs.access(folderPath, (err) => {
    if (err) {
      fs.mkdir(folderPath);
    }
  });
}

module.exports = doesFolderExist;