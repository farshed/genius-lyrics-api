const cio = require('cheerio-without-node-native');
const axios = require('axios');

const baseUrl = 'https://www.genius.com';

/**
 * @param {string} path
 */
module.exports = async function(path) {
	if (!path) throw 'No path was provided';
	try {
		const dataUrl = baseUrl + path;
		var { data } = await axios.get(dataUrl);
		const $ = cio.load(data);
		const selector = $('img[class="cover_art-image"]').attr('src');
		return selector;
	} catch (e) {
		throw e;
	}
};