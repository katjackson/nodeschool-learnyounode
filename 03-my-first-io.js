var fs = require('fs')
var path = process.argv[2]

var contents = fs.readFileSync(path)

var lineArray = contents.toString().split(/\n/);
console.log(lineArray.length - 1)
