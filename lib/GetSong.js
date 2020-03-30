const searchLyrics = require('./SearchLyrics');
const getData = require('./GetData');
const getLyricsFromHtml = require('./GetLyricsFromHtml');
const getAlbumArtFromHtml = require('./GetAlbumArtFromHtml');

/**
 * @param {string} path
 */
module.exports = async function(options) {
	try {
		let results = await searchLyrics(options);
		if (!results) return null;
		let data = await getData(results[0].path);
		let lyrics = await getLyricsFromHtml(data);
		if (lyrics.length === 0 || lyrics.length > 4000) lyrics = null;
		let albumArt = await getAlbumArtFromHtml(data);
		if (albumArt.length === 0) albumArt = null;
		return {"lyrics": lyrics, "albumArt": albumArt};
	} catch (e) {
		throw e;
	}
};
