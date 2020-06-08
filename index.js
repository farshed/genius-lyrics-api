exports.getLyrics = require('./lib/getLyrics');
exports.getAlbumArt = require('./lib/getAlbumArt');
exports.getSong = require('./lib/getSong');
exports.searchSong = require('./lib/searchSong');
// exports.getSongFromUrl = require('./lib/getSongFromId');

const search = require('./lib/getSongFromId');
const options = {
	title: 'Blinding Lights',
	artist: 'The Weeknd',
	apiKey: 'xGUkuEImvLYnfrvUptFJGdbXeEee6Bn4ul8li5nwH7QNl3gETByg5N3GMgQEbHXg'
};
search(378195, options.apiKey);
