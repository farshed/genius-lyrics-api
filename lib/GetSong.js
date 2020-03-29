const searchLyrics = require('./SearchLyrics');
const getData = require('./GetData');
const getLyricsFromPath = require('./GetLyricsFromPath');
const getAlbumArtFromPath = require('./GetAlbumArtFromPath');

/**
 * @param {string} path
 */
module.exports = async function(options) {
	try {
		let results = await searchLyrics(options);
		if (!results) return null;
		let data = await getData(results[0].path);
		let lyrics = await getLyricsFromPath(data);
		if (lyrics.length === 0 || lyrics.length > 4000) lyrics = null;
		let albumArt = await getAlbumArtFromPath(data);
		if (albumArt.length === 0 || albumArt.length > 4000) albumArt = null;
		return [lyrics, albumArt];
	} catch (e) {
		throw e;
	}
};
