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
		let data = await getData(results[0].path);
		let lyrics = await getLyricsFromPath(data);
		if (lyrics.length === 0 || lyrics.length > 4000) return null;
		return lyrics;
	} catch (e) {
		throw e;
	}
};
