fs = require 'fs'
directory = process.argv[2]
extension = process.argv[3]

fs.readdir(directory, (err, list) ->
    console.log err if err?
    console.log file for file in list when file.endsWith ".#{extension}"
)
