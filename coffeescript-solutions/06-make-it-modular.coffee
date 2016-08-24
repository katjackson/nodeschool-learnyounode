filter = require './06-module'

filter process.argv[2], process.argv[3], (err, data) ->
    console.log err if err?
    console.log file for file in data
