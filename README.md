# genius-lyrics-api [![npm version](https://img.shields.io/npm/v/react-native-quick-scroll.svg?style=flat)](https://www.npmjs.com/package/react-native-quick-scroll)

This package provides a convenient wrapper around [Genius API]() for searching song lyrics. It also scrapes lyrics directly from genius.com. genius-lyrics-api doesn't use any native node modules so it should work also with front-end libraries (ReactJS/React Native etc.).

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
  apiKey: 'XXXXXXXXXXXXXXXXXXXXXXX';
	title: 'Fallen';
	artist: 'Gert Taberner';
	optimizeQuery: true;
};

getLyrics(options).then(lyrics => console.log(lyrics));
```

## Methods

genius-lyrics-api exports three methods:

### `getLyrics(options)`

Automatically get the lyrics from genius.com using the `title` & `artist` fields.
Returns a promise that resolves to a string containing lyrics. Throws an error if lyrics are not found.

#### Arguments

```js
const options = {
	apiKey: string, // Genius Developer API key
	title: string, // Title of the song
	artist: string, // Name of the artist
	optimizeQuery: boolean // Whether to clean `title` & `artist` before searching. `false` by default.
};
```

All properties in the `lyricsOptions` object are required except `optimizeQuery`. If either of the `title` or `artist` is unknown, pass an empty string as its value.

### `searchLyrics(options)`

Search lyrics from genius.com using the `title` & `artist` fields.
Returns a promise that resolves to an array of search results. Throws an error if no matches are found.

Receives the same arguments as `getLyrics`.

### `getLyricsFromPath(path: string)`

Get the lyrics of a song using the `path` property present in the search results of `searchLyrics` method.
Returns a promise that resolves to a string containing lyrics.
