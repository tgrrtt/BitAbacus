// Include http module.
var credentials = require("./myKeys.json")
var http = require("http");
var url = require('url');
var hmac = require("authhmac");
var crypto = require("crypto")
var mtgox = require('./mtgox-client');
var nonce = 13;



function getBalance() {
	var key = credentials.key;
	var secret = credentials.secret;

	// this needs to be incremented on each request
	//nonce += 1;

	var params = {
		"method": "getInfo",
        "nonce": nonce
    }

    // TODO: create query string from params
    // ex. method=getInfo&nounce=13
    var sign = {}; // = someFunctionThatTurnsHashIntoQuertyString(params);

    // use "crypto" library instead
    // this may not work as it may expect a hash and not a string
	hmac.sign(sign, key, secret);

	var options = {
		host: 'btc-e.com',
		path: '/tapi',
		method: 'POST',
		headers: {
			'Content-Type': 'multipart/form-data',
			'Key': key,
			'Sign': sign
		}
	};

	var request = https.request(options, function(response) {  
	  
		var body = "";
	  
		response.on("data", function(data) {  
			body += data;  
		});  
		 
		response.on("end", function() {  
			var data = JSON.parse(body);  
			console.log(data);
		});
	});

	request.end();
}

//getBalance();

//setInterval(getTicker, 5000);

// Create the server. Function passed as parameter is called on every request made.
// request variable holds all request parameters
// response variable allows you to do anything with response sent to the client.

var express = require('express');
var app = express();

// GET /
app.get('/', function(req, res){
  res.send('hello world');
});

// GET /ticker
// gets ticker data from Mt. Gox
app.get('/ticker', function(req, res) {
	mtgox.getTicker(function(ticker){
		res.send(ticker);
	})
});

app.listen(5000);





















