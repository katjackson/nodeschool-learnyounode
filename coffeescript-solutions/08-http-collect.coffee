http = require 'http'
bl = require 'bl'
url = process.argv[2]



http.get url, (response) ->
    response.pipe bl ( (err, data) ->
        console.log data.length
        console.log data.toString('utf8')
    )
