
//var btce = require('./btce-client.js');
var mtgox = require('./mtgox-public-client.js');
var btce = require('./btce-public-client.js');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api', function(req, res) {
	res.send("BitAbacus Yo. Make that paper.");
});


app.get('/api/random', function(req, res) {
    var rand = Math.floor(Math.random() * 1000);
    var randPrice = {
        price: rand
    }
    res.send(randPrice);
})

app.get('/api/mtgox_btc_usd_data', function(req, res) {
    mtgox.getTicker(function(ticker){
        res.send(ticker);
    })
});

app.get('/api/btce_ltc_btc_data', function(req, res) {
    btce.getTicker2(function(ticker){
        res.send(ticker);
    })
});

app.listen(5000);





