fs = require 'fs'
path = process.argv[2]

fs.readFile(path, 'utf8', (err, data) ->
    console.log err if err?
    console.log (char for char in data when char is '\n').length
)
