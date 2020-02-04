const checkOptions = (apiKey, title, artist) => {
	switch (undefined) {
		case apiKey:
			throw '"apiKey" property is missing from options';
		case title:
			throw '"title" property is missing from options';
		case artist:
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

const noLyricsError = () => {
	throw 'No lyrics found. Make sure the title and artist name is correct';
};

module.exports = { checkOptions, getTitle, noLyricsError };
