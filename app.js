var env = require('./env.js')
var scraper = require('./scrape.js');
scraper.scrape();


var express = require("express");
var path = require('path');
var app = express();

var dir, indexRoute;
if (env === 'local') {
	dir = '/../faeria-deckbuilder/app';
	indexRoute = '/../faeria-deckbuilder/app/index.html';
}
if (env === 'stage') {
	dir = '/../faeria-deckbuilder/dist';
	indexRoute = '/../faeria-deckbuilder/dist/index.html';
}
if (env === 'prod') {
	dir = '/../faeriadecks/';
	indexRoute = '/../faeriadecks/index.html';
}

app.use(express.static(__dirname+dir));

app.listen(9005, "127.0.0.1");

app.get('/*', function(req,res) {
	res.sendfile(path.normalize(__dirname + indexRoute));
});