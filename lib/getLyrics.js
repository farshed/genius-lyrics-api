const searchSong = require('./searchSong');
const { checkOptions } = require('./utils');
const extractLyrics = require('./utils/extractLyrics');

/**
 * @param {({apiKey: string, title: string, artist: string, optimizeQuery: boolean}|string)} arg - options object, or Genius url
 */
module.exports = async function (arg) {
	try {
		if (arg && typeof arg === 'string') {
			let lyrics = await extractLyrics(arg);
			return lyrics;
		} else if (typeof arg === 'object') {
			checkOptions(options);
			let results = await searchSong(options);
			if (!results) return null;
			let lyrics = await extractLyrics(results[0].url);
			if (lyrics.length === 0 || lyrics.length > 4000) return null;
			return lyrics;
		} else {
			throw 'Invalid argument';
		}
	} catch (e) {
		throw e;
	}
};
