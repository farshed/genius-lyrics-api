const searchLyrics = require('./SearchLyrics');
const getLyricsFromPath = require('./GetLyricsFromPath');
const getData = require('./GetData');

/**
 * @param {{apiKey: string, title: string, artist: string, optimizeQuery: boolean}} options
 */
module.exports = async function(options) {
	try {
		console.log("1");
		let results = await searchLyrics(options);
		console.log("2");
		if (!results) return null;
		let data = await getData(results[0].path);
		console.log("3");
		let lyrics = await getLyricsFromPath(data);
		console.log("4");
		if (lyrics.length === 0 || lyrics.length > 4000) return null;
		console.log("5");
		return lyrics;
	} catch (e) {
		throw e;
	}
};
