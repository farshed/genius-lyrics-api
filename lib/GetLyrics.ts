import searchLyrics from './SearchLyrics';
import getLyricsFromPath from './GetLyricsFromPath';
import { noLyricsError } from './Utils';

interface params {
	apiKey: string;
	title: string;
	artist: string;
	optimizeQuery: boolean;
}

export default async function(options: params) {
	try {
		let results = await searchLyrics(options);
		let lyrics = await getLyricsFromPath(results[0].path);
		if (lyrics.length > 3000) noLyricsError();
		return lyrics;
	} catch (e) {
		return e;
	}
}
