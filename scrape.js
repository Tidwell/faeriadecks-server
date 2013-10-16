var fs = require('fs');
var env = require('./env.js');
var request = require('request');
var cheerio = require('cheerio');

var nameIdMap = require('./name-id-map.js');

var path;

if (env === 'local') {
	path = "../faeria-deckbuilder/app/cards.json";
}
else if (env === 'prod') {
	path = "../faeriadecks/cards.json";
}
else if (env === 'stage') {
	path = "../faeria-deckbuilder/dist/cards.json";
}

function save(cards) {
	fs.writeFile(path, JSON.stringify(cards), function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log("File saved");
		}
	});
}

function scrape($) {
	var colorOrder = ['blue','green','yellow','red','human'];
	var cards = [];

	function extract(td) {
		var txt = $(td).text().trim();
		return txt ? txt : null;
	}

	function titleCase(txt) {
		var fixed = '';
		var split = txt.split(' ');
		split.forEach(function(wrd, i){
			fixed += wrd.charAt(0).toUpperCase() + wrd.substr(1)+ (i=== split.length-1 ? '' : ' ');
		});

		return fixed;
	}

	$('table.wikitable').each(function(i) {
		$(this).find('tr').each(function() {
			var $tds = $(this).find('td');
			var name = extract($tds[1]);

			if (!name) { return; }

			if (!nameIdMap[name] && !nameIdMap[titleCase(name)]) {
				console.log('Failed to find: '+ name);
				return;
			}

			var gameId = nameIdMap[name]
			nameIdMap[name] = null;

			var life = extract($tds[7]);
			if (life) { life = life.replace('n/a', 0); }

			var power = extract($tds[6]);
			if (isNaN(power)) { power = ''; }

			cards.push({
				name: name,
				type: extract($tds[2]),
				gold: extract($tds[3]),
				faeria: extract($tds[4]),
				landCost: extract($tds[5]),
				landColor: colorOrder[i],
				power: power,
				life: life,
				rarity: extract($tds[8]),
				ability: extract($tds[9]),
				gameId: gameId
			});
		});
	});

	for (var name in nameIdMap) {
		if (nameIdMap[name]) {
			cards.push({
				name: name,
				type: null,
				gold: null,
				faeria: null,
				landCost: null,
				landColor: null,
				power: null,
				life: null,
				rarity: null,
				ability: null,
				gameId: nameIdMap[name],
				noData: true
			});
		}
	}

	return cards;
}

function init() {
	request('http://faeriawiki.de/wiki_en/index.php?title=Card_list', function(err, resp, body) {
		if (err) {
			throw err;
		}
		var $ = cheerio.load(body);
		var cards = scrape($);
		save(cards);
	});
}

module.exports = {
	scrape: init
}