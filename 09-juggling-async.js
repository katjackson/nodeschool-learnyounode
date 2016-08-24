var http = require('http');
var urls = process.argv.slice(2);

var allData = []

for (i = 0; i < 3; i++) {
    http.get(urls[i], function(response) {
        response.setEncoding('utf8');
        var data = ''
        response.on('data', function(chunk) {
            data += chunk
        });
        response.on('end', function() {
            allData.push(data)
            if (allData.length == 3) {
                for (i in allData) {
                    console.log(allData[i]);
                };
            };
        });
    });
}
