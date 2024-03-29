//Get exchange rate data via public API from Mt Gox and returns it to server.app to serve.

var https = require("https");
var fs = require('fs');

exports.getTicker = function (callback) { 

	var options = {
		host: 'data.mtgox.com',
		path: "/api/1/BTCUSD/ticker"
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

