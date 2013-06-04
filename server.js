
var btce = require('./btce-client.js');
var mtgox = require('./mtgox-client.js');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api', function(req, res) {
	res.send("BitAbacus Yo. Make that paper.");
});

// GET /api/ticker
// gets ticker data from Mt. Gox
//app.get('/api/ticker', function(req, res) {
//	mtgox.getTicker(function(ticker){
//		res.send(ticker);
//	})
//});

app.get('/api/random', function(req, res) {
    var rand = Math.floor(Math.random() * 1000);
    var blah = {
        price: rand
    }
    res.send(blah);
})

//app.get('/api/ticker/goxTickerData.txt', function(req, res) {
//    mtgox.saveTicker(function(ticker){
//        res.send(ticker);
//    })
//});


app.listen(5000);





