# generator-module-boilerplate

[![npm version](https://badge.fury.io/js/generator-module-boilerplate.svg)](https://badge.fury.io/js/generator-module-boilerplate)
[![David](https://img.shields.io/david/duivvv/generator-module-boilerplate.svg?style=flat-square)](https://david-dm.org/duivvv/generator-module-boilerplate)

this generator generates an npm module (UMD, CJS, ES6) boilerplate

this boilerplate

- is optimized for Webpack 2, Rollup bundling (module, jsnext:main)
- creates an UMD build in the /dist folder (for use in a browser and/or via the https://unpkg.com CDN)

## Getting Started

### Install Yo

```bash
yarn global add yo
```

### Install generator-module-boilerplate

```bash
yarn global add generator-module-boilerplate
```

## Usage

Initiate the generator:

```bash
yo module-boilerplate
```

### NPM scripts


```bash
npm run build
```
+ build:(es|cjs|umd|umd:min)

```bash
npm run test
```

```bash
npm run lint
```

## License

MIT
