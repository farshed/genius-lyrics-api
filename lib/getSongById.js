const axios = require('axios');
const extractLyrics = require('./utils/extractLyrics');

const url = 'http://api.genius.com/songs/';
/**
 * @param {(number|string)} id
 * @param {string} apiKey
 */
module.exports = async function (id, apiKey) {
	if (!id) throw 'No id was provided';
	try {
		const headers = {
			Authorization: 'Bearer ' + apiKey
		};
		let {
			data: {
				response: { song }
			}
		} = await axios.get(url + id, { headers });
		let lyrics = await extractLyrics(song.url);
		return {
			id: song.id,
			url: song.url,
			lyrics,
			albumArt: song.song_art_image_url
		};
	} catch (e) {
		throw e;
	}
};
