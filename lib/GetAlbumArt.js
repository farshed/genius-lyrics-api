const searchLyrics = require('./SearchLyrics');
const getAlbumArtFromPath = require('./GetAlbumArtFromPath');

/**
 * @param {{apiKey: string, title: string, artist: string, optimizeQuery: boolean}} options
 */
module.exports = async function(options) {
	try {
		let results = await searchLyrics(options);
		if (!results) return null;
		let artUrl = await getAlbumArtFromPath(results[0].path);
		if (artUrl.length === 0 || artUrl.length > 4000) return null;
		return artUrl;
	} catch (e) {
		throw e;
	}
};
