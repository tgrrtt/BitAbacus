// Include http module.
var http = require("http");
var https = require("https");
 
var ticker;

function getTicker() { 

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
				ticker = JSON.parse(body);  
				console.log(ticker);
			});
	});

	request.end();
}
  
setInterval(getTicker, 5000);

// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.
http.createServer(function (request, response) {
	// Attach listener on end event.
	// This event is called when client sent all data and is waiting for response.
	request.on("end", function () {
		// Write headers to the response.
		// 200 is HTTP status code (this one means success)
		// Second parameter holds header fields in object
		// We are sending plain text, so Content-Type should be text/plain
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		// Send data and end response.
		var str = ticker.return.last.display
		response.end(str);
	});
// Listen on the 8080 port.
}).listen(8080);