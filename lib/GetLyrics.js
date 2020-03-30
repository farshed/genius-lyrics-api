const searchLyrics = require('./SearchLyrics');
const getLyricsFromPath = require('./GetLyricsFromPath');
const getData = require('./GetData');

/**
 * @param {{apiKey: string, title: string, artist: string, optimizeQuery: boolean}} options
 */
module.exports = async function(options) {
	try {
		let results = await searchLyrics(options);
		if (!results) return null;
		let lyrics = await getLyricsFromPath(results[0].path);
		if (lyrics.length === 0 || lyrics.length > 4000) return null;
		return lyrics;
	} catch (e) {
		throw e;
	}
};
