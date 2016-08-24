var fs = require('fs');

var filter = function(directoryName, fileExtension, callback) {
    fs.readdir(directoryName, function(err, files) {
        var filteredFiles = []

        if (err) {
            return callback(err);
        };

        for (i in files) {
            if (files[i].endsWith('.' + fileExtension)) {
                filteredFiles.push(files[i]);
            };
        };

        callback(null, filteredFiles);
    });
};

module.exports = filter
