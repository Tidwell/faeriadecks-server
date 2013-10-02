var scraper = require('./scrape.js');
scraper.scrape();


var express = require("express");
var path = require('path');
var app = express();

app.use(express.static(__dirname+'/../faeria-deckbuilder/app'));

app.listen(8080, "127.0.0.1");

app.get('/*', function(req,res) {
	res.sendfile(path.normalize(__dirname + '/../faeria-deckbuilder/app/index.html'));
});