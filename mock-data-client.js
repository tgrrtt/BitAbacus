//This whole file might be obsolete.

var https = require("https");

exports.getAmounts = function (callback) {

    var options = {
        host: 'localhost',
        port: '5000',
        path: '/mock/mock-user-data.json'
    };

    var request = https.request(options, function(response) {

        var body = "";

        response.on("data", function(data) {
            body += data;
        });

        response.on("end", function() {
            var userDB = JSON.parse(body);
            console.log(userDB);
            callback(userDB);
        });
    });

    request.end();
}


