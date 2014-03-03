var fs = require('fs');
var env = require('./env.js');
var request = require('request');
var cheerio = require('cheerio');

var nameIdMap = require('./name-id-map.js');

var path = './cards.json';

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
	var cards = [];

	function extract(td, replacelb) {
		txt = $(td);
		if (replacelb) {
			txt = txt.html();
			txt = txt.replace('<br>', ' [lb] ');
			txt = $('<td>'+txt+'</td>');
		}
		var txt = txt.text();
		
		txt = txt.trim();
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

	function getColor(td) {
		var txt = extract($(td));
		return txt.toLowerCase();
	}

	function getRarity(td) {
		var img = $(td).find('img');
		if (!img.length) {
			return 'B';
		} else {
			img = $(img);
			var src = img.attr('src');
			if (src) {
				if (src.indexOf('common') !== -1) {
					return 'C';
				}
				if (src.indexOf('exceptional') !== -1) {
					return 'E';
				}
				if (src.indexOf('rare') !== -1) {
					return 'R';
				}
				if (src.indexOf('legendary') !== -1) {
					return 'L';
				}
			}
			console.log('failed to find rarity')
		}
	}

	$('table.wikitable tr').each(function(i, tr) {
			if (i === 0) { return; } //ignore the header
			var $tds = $(this).find('td');
			var name = extract($tds[1]);

			if (!name) { console.log('failed on row', i); return; }

			var gameId;
			if (nameIdMap[name]) {
				gameId = nameIdMap[name];
			} else if (nameIdMap[titleCase(name)]) {
				gameId = nameIdMap[titleCase(name)];
			} else {
				console.log('Failed to find: '+ name);
				return;
			}
			nameIdMap[name] = null;

			var life = extract($tds[8]);
			if (life) { life = life.replace('n/a', 0); }

			var power = extract($tds[7]);
			if (isNaN(power)) { power = ''; }

			var faeria = extract($tds[5]);
			if (!faeria) { faeria = '0'; }

			var c = {
				name: name,
				type: titleCase(extract($tds[3])),
				gold: extract($tds[4]),
				faeria: faeria,
				landCost: extract($tds[6]),
				landColor: getColor($tds[2]),
				power: power,
				life: life,
				rarity: getRarity($tds[9]),
				ability: extract($tds[10], true),
				gameId: +gameId
			};

			cards.push(c);
	});

	return cards;
}

function init() {
	request('http://faeria.gamepedia.com/Cards', function(err, resp, body) {
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