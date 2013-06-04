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

//exports.saveTicker = function (callback) {
//
//    var options = {
//        host: 'data.mtgox.com',
//        path: "/api/1/BTCUSD/ticker"
//    };
//
//    var request = https.request(options, function(response) {
//
//        var body = "";
//
//        response.on("data", function(data) {
//            body += data;
//        });
//
//        response.on("end", function() {
//            var ticker = JSON.parse(body);
//            console.log(ticker);
//            fs.writeFile("goxTickerData.txt", ticker, function (err) {
//                if (err) throw err;
//                console.log("Saved gox ticker data");
//            });
//            callback(ticker);
//
//        });
//    });
//
//    request.end();
//}
