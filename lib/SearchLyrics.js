const axios = require('axios');
const { checkOptions, getTitle } = require('./utils');

const searchUrl = 'https://api.genius.com/search?q=';

//prettier-ignore
module.exports = async function({ apiKey, title, artist, optimizeQuery = false }) {
	checkOptions(apiKey, title, artist);
	const song = optimizeQuery ? getTitle(title, artist) : `${title} ${artist}`;
	const reqUrl = `${searchUrl}${song}`;
	const headers = {
		Authorization: 'Bearer ' + apiKey
	};
	try {
		let { data } = await axios.get(reqUrl, { headers });
		if (data.response.hits.length === 0) return null;
		const results = data.response.hits.map(val => {
			const { full_title, path } = val.result;
			return { title: full_title, path };
		});
		return results;
	} catch (e) {
		throw e;
	}
}
