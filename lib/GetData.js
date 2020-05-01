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
	} catch (e) {
		throw e;
	}
	return data;
};
