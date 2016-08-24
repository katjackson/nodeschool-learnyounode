// Generated by CoffeeScript 1.10.0
(function() {
  var filter;

  filter = function(directory, extension, callback) {
    var fs;
    fs = require('fs');
    return fs.readdir(directory, function(err, list) {
      var data, file;
      if (err != null) {
        return callback(err);
      }
      data = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = list.length; i < len; i++) {
          file = list[i];
          if (file.endsWith("." + extension)) {
            results.push(file);
          }
        }
        return results;
      })();
      return callback(null, data);
    });
  };

  module.exports = filter;

}).call(this);
