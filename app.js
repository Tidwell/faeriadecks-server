var env = require('./env.js');
var scraper = require('./scrape.js');
var url = require('url');

scraper.scrape();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/faeriadecks');
var DeckInfo = mongoose.model('DeckInfo', {
	shortKey: String,
	fullInfo: String
});

var express = require("express");
var path = require('path');
var app = express();
var persist = require('./persist.js');

var dir, indexRoute;

console.log('env is', env);
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

app.get('/share', function(req,res){
	var urlParts = url.parse(req.url, true);
	var query = urlParts.query;

	if (!query.deckInfo) {
		res.end('No deck submitted');
		return;
	}

	var hash = persist.getHash();
	var toSave = {shortKey: hash, fullInfo: query.deckInfo};
	var entry = new DeckInfo(toSave);
	entry.save(function (err) {
		res.json({hash: hash});
	});
});

app.get('/load', function(req,res){
	var urlParts = url.parse(req.url, true);
	var query = urlParts.query;

	if (!query.shortKey) {
		res.end('No deck id submitted');
		return;
	}

	DeckInfo.find({shortKey: query.shortKey}, function(err,data){
		if (!data.length) {
			res.end('Could not find deck with id '+query.shortKey);
			return;
		}
		res.json({data: data});
	});

});

app.get('/*', function(req,res) {
	res.sendfile(path.normalize(__dirname + indexRoute));
});