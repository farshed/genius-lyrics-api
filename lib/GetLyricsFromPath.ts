import axios from 'axios';
import cio from 'cheerio-without-node-native';

const baseUrl = 'https://www.genius.com';

export default async function(path: string) {
	if (path === undefined) throw 'No path provided';
	try {
		const lyricsUrl = baseUrl + path;
		var { data } = await axios.get(lyricsUrl);
	} catch (e) {
		return e;
	}
	const $ = cio.load(data);
	const selector = $('div[class="lyrics"]');
	return selector.text().trim();
}
