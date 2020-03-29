const cio = require('cheerio-without-node-native');

/**
 * @param {string} path
 */
module.exports = async function(data) {
	if (!data) throw 'No data was provided';
	try {
		const $ = cio.load(data);
		const selector = $('div[class="lyrics"]');
		return selector.text().trim();
	} catch (e) {
		throw e;
	}
};
