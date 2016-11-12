# <%= name %>

<%= description %>

[![NPM](https://img.shields.io/npm/v/<%= name %>.svg?style=flat-square)](https://www.npmjs.com/package/<%= name %>)
[![David](https://img.shields.io/david/<%= github %>/<%= name %>.svg?style=flat-square)](https://david-dm.org/<%= github %>/<%= name %>)
[![Travis](https://img.shields.io/travis/<%= github %>/<%= name %>/master.svg?style=flat-square)](https://travis-ci.org/<%= github %>/<%= name %>)

### Installation

Install via yarn or npm

	yarn add <%= name %> -D

or

	npm i <%= name %> -D


If you don't use a package manager, you can [access `<%= name %>` via unpkg (CDN)](https://unpkg.com/<%= name %>/), download the source, or point your package manager to the url.

`<%= name %>` is compiled as a collection of [CommonJS](http://webpack.github.io/docs/commonjs.html) modules & [ES2015 modules](http://www.2ality.com/2014/09/es6-modules-final.html) for bundlers that support the `jsnext:main` or `module` field in package.json (Rollup, Webpack 2)

The `<%= name %>` package includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the [`dist` folder](https://unpkg.com/<%= name %>/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. You can drop a UMD build as a [`<script>` tag](https://unpkg.com/<%= name %>) on your page. The UMD builds make `<%= name %>` available as a `window.<%= ccname %>` global variable.

### Usage

```js

import <%= ccname %> from '<%= name %>';

```

### Configuration

### Examples

see [`example` folder](example/)

### License

<%= license %>
