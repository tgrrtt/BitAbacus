var https = require("https");

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