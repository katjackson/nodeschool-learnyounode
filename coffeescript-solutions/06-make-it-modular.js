// Generated by CoffeeScript 1.10.0
(function() {
  var filter;

  filter = require('./06-module');

  filter(process.argv[2], process.argv[3], function(err, data) {
    var file, i, len, results;
    if (err != null) {
      console.log(err);
    }
    results = [];
    for (i = 0, len = data.length; i < len; i++) {
      file = data[i];
      results.push(console.log(file));
    }
    return results;
  });

}).call(this);
