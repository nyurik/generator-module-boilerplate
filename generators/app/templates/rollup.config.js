import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

const name = `<%= ccname %>`;

const plugins = [
  babel(),
  nodeResolve({
    module: true,
    jsnext: true
  })
];

const isProd = process.env.NODE_ENV === `production`;

if (isProd) {
  plugins.push(uglify());
}

export default {

  entry: `src/index.js`,
  plugins,
  dest: `dist/${name}${isProd ? `min` : ``}.js`,
  moduleName: name,
  format: `umd`

};
