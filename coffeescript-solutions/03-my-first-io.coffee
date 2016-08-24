fs = require 'fs'
path = process.argv[2]

contents = fs.readFileSync(path).toString()
newLines = (char for char in contents when char is '\n')
console.log newLines.length
