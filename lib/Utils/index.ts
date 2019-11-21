export const checkOptions = (apiKey: string, title: string, artist: string): void => {
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

export const getTitle = (title: string, artist: string): string => {
	return `${title} ${artist === 'unknown' ? '' : artist}`
		.toLowerCase()
		.replace(/ *\([^)]*\) */g, '')
		.replace(/ *\[[^\]]*]/, '')
		.replace(/feat.|ft./g, '')
		.replace(/\s+/g, ' ')
		.trim();
};

export const noLyricsError = (): void => {
	throw 'No lyrics found. Make sure the title and artist name is correct';
};