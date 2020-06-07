const checkOptions = (options) => {
	let { apiKey, title, artist } = options;
	switch ('undefined') {
		case typeof apiKey:
			throw '"apiKey" property is missing from options';
		case typeof title:
			throw '"title" property is missing from options';
		case typeof artist:
			throw '"artist" property is missing from options';
		default:
			break;
	}
};

const getTitle = (title, artist) => {
	return `${title} ${artist}`
		.toLowerCase()
		.replace(/ *\([^)]*\) */g, '')
		.replace(/ *\[[^\]]*]/, '')
		.replace(/feat.|ft./g, '')
		.replace(/\s+/g, ' ')
		.trim();
};

module.exports = { checkOptions, getTitle };
