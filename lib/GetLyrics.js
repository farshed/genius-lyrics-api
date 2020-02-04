const searchLyrics = require('./SearchLyrics');
const getLyricsFromPath = require('./GetLyricsFromPath');
const { noLyricsError } = require('./Utils');

module.exports = async function(options) {
	try {
		let results = await searchLyrics(options);
		let lyrics = await getLyricsFromPath(results[0].path);
		if (lyrics.length > 3000) noLyricsError();
		return lyrics;
	} catch (e) {
		throw e;
	}
};
