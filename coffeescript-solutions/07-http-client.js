// Generated by CoffeeScript 1.10.0
(function() {
  var http, url;

  http = require('http');

  url = process.argv[2];

  http.get(url, function(response) {
    response.setEncoding('utf8');
    return response.on("data", function(chunk) {
      return console.log(chunk);
    });
  });

}).call(this);
