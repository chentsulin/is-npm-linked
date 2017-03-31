# is-npm-linked

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david_img]][david_site]

> Check your npm package is linked


## Install

```
$ npm install is-npm-linked
```


## Usage

```js
const isNpmLinked = require('is-npm-linked');

isNpmLinked('package-name').then(console.log);
//=>
```


## API

### isNpmLinked(packageName)

#### packageName

*Required*
Type: `string`

Lorem ipsum.


## License

MIT © [C.T. Lin](https://github.com/chentsulin/is-npm-linked)

[npm-image]: https://badge.fury.io/js/is-npm-linked.svg
[npm-url]: https://npmjs.org/package/is-npm-linked
[travis-image]: https://travis-ci.org/chentsulin/is-npm-linked.svg
[travis-url]: https://travis-ci.org/chentsulin/is-npm-linked
[coveralls-image]: https://coveralls.io/repos/chentsulin/is-npm-linked/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/r/chentsulin/is-npm-linked?branch=master
[david_img]: https://david-dm.org/chentsulin/is-npm-linked.svg
[david_site]: https://david-dm.org/chentsulin/is-npm-linked
