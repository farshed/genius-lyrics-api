# genius-lyrics-api [![npm version](https://img.shields.io/npm/v/genius-lyrics-api.svg?style=flat)](https://www.npmjs.com/package/genius-lyrics-api)

A package that provides a convenient wrapper around [Genius API](https://genius.com/developers) for searching and scraping song lyrics.<br/>It doesn't use any native node dependencies so it should work fine with front-end libraries like ReactJS & React Native.

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

getLyrics(options).then(lyrics => console.log(lyrics));
```

## Methods

genius-lyrics-api exposes the following methods:

### `getLyrics(options)`

Automatically get the lyrics from genius.com using the `title` & `artist` fields.<br/>
Returns a promise that resolves to a string containing lyrics. Throws an error if lyrics are not found.

#### Arguments

```js
const options = {
	apiKey: string, // Genius Developer API key/Access Token
	title: string, // Title of the song
	artist: string, // Name of the artist
	optimizeQuery: boolean // Whether to clean `title` & `artist` before searching. `false` by default.
};
```

All properties in the `options` object are required except `optimizeQuery`. If either of the `title` or `artist` is unknown, pass an empty string as its value.

### `searchLyrics(options)`

Search lyrics from genius.com using the `title` & `artist` fields.<br/>
Returns a promise that resolves to an array of search results. Throws an error if no matches are found.

Receives the same arguments as `getLyrics`.

### `getLyricsFromPath(path: string)`

Get the lyrics of a song using the `path` property present in the search results of `searchLyrics` method.<br/>
Returns a promise that resolves to a string containing lyrics.
