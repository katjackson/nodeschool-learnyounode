fs = require 'fs'
http = require 'http'
port = process.argv[2]
path = process.argv[3]

http.createServer( (request, response) ->
    fs.createReadStream path
        .pipe(response)

).listen(port)
