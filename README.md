# genius-lyrics-api [![npm version](https://img.shields.io/npm/v/genius-lyrics-api.svg?style=flat)](https://www.npmjs.com/package/genius-lyrics-api)

A package that leverages [Genius API](https://genius.com/developers) to search and fetch/scrape song lyrics and album art.<br/>It doesn't use any native node dependencies and therefore, can be used on the client-side.

## Installation

Install with npm

```js
npm install --save genius-lyrics-api
```

Or install with Yarn

```js
yarn add genius-lyrics-api
```

## Usage

[Get the Genius Developer Access Token](https://genius.com/developers)
<br>

```js
import { getLyrics } from 'genius-lyrics-api';
```

```js
const options = {
	apiKey: 'XXXXXXXXXXXXXXXXXXXXXXX',
	title: 'Blinding Lights',
	artist: 'The Weeknd',
	optimizeQuery: true
};

getLyrics(options).then((lyrics) => console.log(lyrics));

getSong(options).then((song) =>
	console.log(`
	${song.id}
	${song.url}
	${song.albumArt}
	${song.lyrics}`)
);
```

<br>

> :warning: You may get a CORS block error while testing on localhost. To bypass this, you need to disable Same-Origin Policy in your browser. You may follow the instructions [here](https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome).

<br>

## Types

```
type options {
	title: string;
	artist: string;
	apiKey: string;		// Genius developer access token
	optimizeQuery?: boolean; // Setting this to true will optimize the query for best results
}

```

🚨 All properties in the options object are required except `optimizeQuery`. If `title` or `artist` is unknown, pass an empty string.

```
type song {
	id: number;		// Genius song id
	url: string;		// Genius webpage URL for the song
	lyrics: string;		// Song lyrics
	albumArt: string;	// URL of the album art image (jpg/png)
}

```

```
type searchResult {
	id: number;		// Genius song id
	url: string;		// Genius webpage URL for the song
	title: string;		// Song title
	albumArt: string;	// URL of the album art image (jpg/png)
}
```

## Methods

genius-lyrics-api exposes the following methods:

### `getLyrics(options | url)`

Accepts [options](#types) or the url to a Genius song. <br/>
Returns a promise that resolves to a string containing lyrics. Returns `null` if no lyrics are found.

### `getAlbumArt(options)`

Accepts an [options](#types) object. <br/>
Returns a promise that resolves to a string containing a url to the song's album art. Returns `null` if no url is found.

### `getSong(options)`

Accepts an [options](#types) object. <br/>
Returns a promise that resolves to an object of type [song](#types). Returns `null` if song is not found.

### `searchSong(options)`

Accepts an [options](#types) object. <br/>
Returns a promise that resolves to an object of type [searchResult](#types). Returns `null` if no matches are found.

### `getSongById(id: (number | string))`

Accepts a valid Genius song ID. IDs can be found using the `searchSong` method. <br/>
Returns a promise that resolves to an object of type [song](#types).

## Support

If you find this package useful, hit that sweet sweet ⭐️ button.
