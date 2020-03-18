const axios = require('axios');
const cio = require('cheerio-without-node-native');

const baseUrl = 'https://www.genius.com';

/**
 * @param {string} path
 */
module.exports = async function(path) {
	if (!path) throw 'No path was provided';
	try {
		const lyricsUrl = baseUrl + path;
		var { data } = await axios.get(lyricsUrl);
	} catch (e) {
		throw e;
	}
	const $ = cio.load(data);
	const selector = $('div[class="lyrics"]');
	return selector.text().trim();
};
