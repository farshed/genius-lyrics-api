const axios = require('axios');
const cheerio = require('cheerio-without-node-native');

/**
 * @param {string} url - Genius URL
 */


const lyricsFunction = {};


lyricsFunction.extractLyrics = async (url) => {
	try {
		let { data } = await axios.get(url);
		const $ = cheerio.load(data);
		let lyrics = $('div[class="lyrics"]').text().trim();
		if (!lyrics) {
			lyrics = '';
			$('div[class^="Lyrics__Container"]').each((i, elem) => {
				if ($(elem).text().length !== 0) {
					let snippet = $(elem)
						.html()
						.replace(/<br>/g, '\n')
						.replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
					lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
				}
			});
		}
		if (!lyrics) return null;
		return lyrics.trim();
	} catch (e) {
		throw e;
	}
};

lyricsFunction.extractLyricsHtml = async (url) => {
	try {
		let { data } = await axios.get(url);
		const $ = cheerio.load(data);
		let lyrics = $('div[class="lyrics"]').text().trim();
		if (!lyrics) {
			lyrics = '';
			$('div[class^="Lyrics__Container"]').each((i, elem) => {
				if ($(elem).text().length !== 0) {
					let snippet = $(elem)
						.html();
						console.log(snippet);
						lyrics = snippet;
				}
			});
		}
		if (!lyrics) return null;
		return lyrics;
	} catch (e) {
		throw e;
	}
};

module.exports = lyricsFunction;