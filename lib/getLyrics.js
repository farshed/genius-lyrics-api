const searchSong = require('./searchSong');
const { checkOptions } = require('./utils');
const extractLyrics = require('./utils/extractLyrics');

/**
 * @param {({apiKey: string, title: string, artist: string, optimizeQuery: boolean}|string, onlyText:boolen)} arg - options object, or Genius URL
 */
module.exports = async function (arg) {
	try {
		if (arg && typeof arg === 'string') {
			let lyrics = await extractLyrics.extractLyrics(arg);
			return lyrics;
		} else if (typeof arg === 'object') {
			checkOptions(arg);
			if(arg.onlyText == false){
				let results = await searchSong(arg);
				if (!results) return null;
				let lyrics = await extractLyrics.extractLyricsHtml(results[0].url);
				return lyrics;
			} else {
				let results = await searchSong(arg);
				if (!results) return null;
				let lyrics = await extractLyrics.extractLyrics(results[0].url);
				return lyrics;
			}
			
		} else {
			throw 'Invalid argument';
		}
	} catch (e) {
		throw e;
	}
};
