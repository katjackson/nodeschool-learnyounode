// Generated by CoffeeScript 1.10.0
(function() {
  var net, port, strftime;

  strftime = require('strftime');

  net = require('net');

  port = process.argv[2];

  net.createServer(function(socket) {
    return socket.end(strftime('%Y-%m-%d %H:%M' + '\n'));
  }).listen(port);

}).call(this);