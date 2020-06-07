const axios = require('axios');
const cio = require('cheerio-without-node-native');

module.exports = async function (url) {
	try {
		var { data } = await axios.get(url);
	} catch (e) {
		throw e;
	}
	const $ = cio.load(data);
	const selector = $('div[class="lyrics"]');
	return selector.text().trim();
};

//return null if no lyrics
