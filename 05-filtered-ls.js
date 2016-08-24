var fs = require('fs');
var path = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(path, function(err, files) {
    for (i = 0; i < files.length; i++) {
        var filename = files[i];
        if (filename.endsWith(ext)) {
            console.log(filename);
        }
    }
});
