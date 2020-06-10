const searchSong = require('./searchSong');
const extractLyrics = require('./utils/extractLyrics');
const { checkOptions } = require('./utils');

/**
 * @param {{apiKey: string, title: string, artist: string, optimizeQuery: boolean}} options
 */
module.exports = async function (options) {
	try {
		checkOptions(options);
		let results = await searchSong(options);
		if (!results) return null;
		let lyrics = await extractLyrics(results[0].url);
		return {
			id: results[0].id,
			url: results[0].url,
			lyrics,
			albumArt: results[0].albumArt
		};
	} catch (e) {
		throw e;
	}
};
