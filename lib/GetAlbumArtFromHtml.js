const cio = require('cheerio-without-node-native');

/**
 * @param {string} path
 */
module.exports = async function(data) {
	if (!data) throw 'No data was provided';
	try {
		const $ = cio.load(data);
		const selector = $('img[class="cover_art-image"]').attr('src');
		return selector;
	} catch (e) {
		throw e;
	}
};