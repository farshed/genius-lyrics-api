# genius-lyrics-api [![npm version](https://img.shields.io/npm/v/react-native-quick-scroll.svg?style=flat)](https://www.npmjs.com/package/react-native-quick-scroll)

This package provides a convenient wrapper around Genius API for searching song lyrics. It also scrapes lyrics directly from genius.com

# Installation

Install with npm

```js
npm install --save genius-lyrics-api
```

Or install with Yarn

```js
yarn add genius-lyrics-api
```

# Usage

```js
import { getLyrics, getLyricsFromPath, searchLyrics } from 'genius-lyrics-api';
```

```js
const options = {
  apiKey: string;
	title: string;
	artist: string;
	optimizeQuery: boolean;
};

getLyrics(options);
```

# Props

Inherits all valid [FlatList props](https://facebook.github.io/react-native/docs/flatlist#props), except `ref` and `showsVerticalScrollIndicator`. Also accepts the following props:

| Prop               | Type     | Default Value      | Description                                                                                          | Required |
| ------------------ | -------- | ------------------ | ---------------------------------------------------------------------------------------------------- | -------- |
| `itemHeight`       | `number` |                    | Height of an item in the FlatList                                                                    | Yes      |
| `viewportHeight`   | `number` |                    | Height of the FlatList area visible on screen at a given time                                        | Yes      |
| `thumbHeight`      | `number` | `80`               | Height of the scroll bar thumb                                                                       | No       |
| `touchAreaWidth`   | `number` | `25`               | Width of the touchable area around thumb                                                             | No       |
| `flashDuration`    | `number` | `40`               | The time taken by the animation to move scroll bar on-screen after the scroll has begun (in ms)      | No       |
| `flashOutDuration` | `number` | `1500`             | The time after which scroll bar disappears (in ms)                                                   | No       |
| `rightOffset`      | `number` | `15`               | The distance of the scroll bar from the right edge of screen                                         | No       |
| `thumbStyle`       | `object` |                    | Style object for the scroll bar thumb (Don't pass `height` here, use the `thumbHeight` prop instead) | No       |
| `scrollbarStyle`   | `object` |                    | Style object for the scroll bar                                                                      | No       |
| `containerStyle`   | `object` |                    | Style object for the parent container                                                                | No       |
| `hiddenPosition`   | `number` | `ScreenWidth + 15` | The off-screen position where the scroll bar thumb moves to after `flashOutDuration`                 | No       |


# Todo (PRs welcome!)

- [x] Add native driver support
- [ ] Implement with [react-native-interactable](https://github.com/wix/react-native-interactable) for better performance
- [ ] Rewrite with TypeScript
- [ ] Add support for FlatList ref