# dhms

Parses `dhms` string to number of milliseconds or seconds

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]

## Install

```bash
npm i dhms
```

## Usage

```js
const dhms = require('dhms');
dhms('1d2h30m45s123'); // 95445123
dhms('1d2h30m45s123', true); // 95568
```

## License

MIT

[npm-url]: https://npmjs.org/package/dhms
[npm-image]: https://badge.fury.io/js/dhms.svg
[travis-url]: https://travis-ci.org/astur/dhms
[travis-image]: https://travis-ci.org/astur/dhms.svg?branch=master