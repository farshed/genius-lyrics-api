const searchSong = require('./searchSong');
const { checkOptions } = require('./utils');

module.exports = async function (options) {
	checkOptions(options);
	let results = await searchSong(options);
	if (!results) return null;
	return results[0].albumArt;
};
