var filter = require('./06-make-it-module')

filter(process.argv[2], process.argv[3], function (error, files) {
    if (error) {console.log(error)};
    for (i in files) {console.log(files[i])};
})
