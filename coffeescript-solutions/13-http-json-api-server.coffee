http = require 'http'
url = require 'url'
port = process.argv[2]

hmsFormat = (timeObject) ->
    'hour': timeObject.getHours()
    'minute': timeObject.getMinutes()
    'second': timeObject.getSeconds()

unixFormat = (timeObject) ->
    'unixtime': timeObject.getTime()

http.createServer( (request, response) ->
    parsedUrl = url.parse(request.url, true)
    time = new Date(parsedUrl.query.iso)

    data = switch (parsedUrl.pathname)
        when '/api/parsetime' then hmsFormat time
        when '/api/unixtime' then unixFormat time
        else null

    if data?
        response.writeHead(200, 'Content-Type': 'application/json')
        response.write(JSON.stringify data)
        response.end()
    else
        response.writeHead(404)
        response.end()
).listen(port)
