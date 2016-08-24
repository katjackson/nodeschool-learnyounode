filter = (directory, extension, callback) ->
    fs = require 'fs'
    fs.readdir directory, (err, list) ->
        if err?
            return callback err
        data = (file for file in list when file.endsWith ".#{extension}")
        callback null, data

module.exports = filter
