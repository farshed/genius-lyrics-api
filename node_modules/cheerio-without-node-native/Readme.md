# cheerio-without-node-native

[cheerio](https://github.com/cheeriojs/cheerio) build that excludes node native modules so that you can use it in platforms like React Native.

cheerio version: `0.20.0`

```
npm i cheerio-without-node-native
```

* use [htmlparser2-without-node-native](https://github.com/oyyd/htmlparser2-without-node-native) instead of [htmlparser2](https://github.com/fb55/htmlparser2).
* exclude node Buffer

## Test

```
npm run test
```
