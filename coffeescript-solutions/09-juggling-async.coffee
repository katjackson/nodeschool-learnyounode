http = require 'http'
bl = require 'bl'
urls = process.argv[2..]

result = []


getIt = (url, callback) ->
    http.get url, (response) ->
        response.pipe bl ( (err, data) ->
            return callback err if err?
            return callback null, data.toString('utf8')
        )

for url in urls
    getIt url, (err, data) ->
        result.push data
        if result.length is urls.length
            console.log x for x in result
