// Generated by CoffeeScript 1.10.0
(function() {
  var fs, path;

  fs = require('fs');

  path = process.argv[2];

  fs.readFile(path, 'utf8', function(err, data) {
    var char;
    if (err != null) {
      console.log(err);
    }
    return console.log(((function() {
      var i, len, results;
      results = [];
      for (i = 0, len = data.length; i < len; i++) {
        char = data[i];
        if (char === '\n') {
          results.push(char);
        }
      }
      return results;
    })()).length);
  });

}).call(this);
