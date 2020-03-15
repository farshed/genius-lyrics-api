const searchLyrics = require('./SearchLyrics');
const getLyricsFromPath = require('./GetLyricsFromPath');

module.exports = async function(options) {
	try {
		let results = await searchLyrics(options);
		if (!results) return null;
		let lyrics = await getLyricsFromPath(results[0].path);
		if (lyrics.length > 3000) return null;
		return lyrics;
	} catch (e) {
		throw e;
	}
};
