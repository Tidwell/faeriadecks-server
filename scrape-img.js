// http: //play.faeria.net/assets/cards/2018.jpg

var fs = require('fs');
var http = require('http');


function pad(id) {
	id = String(id);
	while (id.length < 4) {
		id = 0+id;
	}
	return id;
}
var cards = [];
fs.readFile('./cards.json', 'utf8', function(err, data) {
	if (err) {
		return console.log(err);
	}
	cards = JSON.parse(data);

	cards.forEach(function(card) {
		// console.log(card)
		// console.log('requesting ' + card.name);


		var options = {
			host: 'play.faeria.net',
			port: 80,
			path: '/assets/cards/' + pad(card.gameId) + '.jpg'
		};
		if (String(card.gameId).length >= 4) {
			return;
		}
		console.log(options);

		var request = http.get(options, function(res) {
			var imagedata = '';
			res.setEncoding('binary');

			res.on('data', function(chunk) {
				imagedata += chunk;
			});

			res.on('end', function() {
				fs.writeFile('./imgs/'+pad(card.gameId)+'.jpg', imagedata, 'binary', function(err) {
					if (err) {
						console.log('error with '+ card.name+' '+card.id);
					}
					//console.log(card.name+' - file saved.');
				});
			});
		});
	});
});