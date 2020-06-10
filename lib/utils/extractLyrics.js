const axios = require('axios');
const cio = require('cheerio-without-node-native');

module.exports = async function (url) {
	try {
		let { data } = await axios.get(url);
		const $ = cio.load(data);
		let lyrics = $('div[class="lyrics"]').text().trim();
		if (!lyrics) {
			lyrics = $('div[class*="Lyrics__Container"]')
				.html()
				.replace(/<br>/g, '\n')
				.replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
			lyrics = $('<textarea/>').html(lyrics).text().trim();
		}
		if (!lyrics) return null;
		if (lyrics.length > 4000) return null;
		return lyrics;
	} catch (e) {
		throw e;
	}
};
