var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

function save(cards) {
	fs.writeFile("../faeria-deckbuilder/app/cards.json", JSON.stringify(cards), function(err) {
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

	$('table.wikitable').each(function(i) {
		$(this).find('tr').each(function() {
			var $tds = $(this).find('td');
			var name = extract($tds[1]);

			if (!name) { return; }


			cards.push({
				name: name,
				type: extract($tds[2]),
				gold: extract($tds[3]),
				faeria: extract($tds[4]),
				landCost: extract($tds[5]),
				landColor: colorOrder[i],
				power: extract($tds[6]),
				life: extract($tds[7]),
				rarity: extract($tds[8]),
				ability: extract($tds[9])
			});
		});
	});

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