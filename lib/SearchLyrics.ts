import axios from 'axios';
import { checkOptions, getTitle, noLyricsError } from './Utils';

const searchUrl = 'https://api.genius.com/search?q=';

interface params {
	apiKey: string;
	title: string;
	artist: string;
	optimizeQuery: boolean;
}

interface result {
	title: string;
	path: string;
}

//prettier-ignore
export default async function({ apiKey, title, artist, optimizeQuery = false }: params) {
	checkOptions(apiKey, title, artist);
	const song = optimizeQuery ? getTitle(title, artist) : `${title} ${artist}`;
	const reqUrl = `${searchUrl}${song}`;
	const headers = {
		Authorization: 'Bearer ' + apiKey
	};
	try {
		let { data } = await axios.get(reqUrl, { headers });
		if (data.response.hits.length === 0) noLyricsError();
		const results: result = data.response.hits.map(val => {
			const { full_title, path } = val.result;
			return { title: full_title, path };
		});
		return results;
	} catch (e) {
		return e;
	}
}
