//Node code for getting users infromation from btce using their API and key


var https = require("https");
var hmac = require("authhmac");
var crypto = require("crypto");
var url = require('url');
var credentials = require("./myKeys.json")

var nonce = 13;

exports.getBalance  = function() {
	var key = credentials.key;
	var secret = credentials.secret;

	// this needs to be incremented on each request
	//nonce` += 1;

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