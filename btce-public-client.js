var https = require("https");
var fs = require('fs');

exports.getTicker2 = function (callback) {

    var options = {
        host: "btc-e.com",
        path: "/api/2/ltc_btc/ticker"
    };

    var request = https.request(options, function(response) {

        var body = "";

        response.on("data", function(data) {
            body += data;
        });

        response.on("end", function() {
            var ticker = JSON.parse(body);
            console.log(ticker);
            callback(ticker);
        });
    });

    request.end();
}

