const rollupResolve = require('rollup-plugin-node-resolve');
const rollupBabel = require('rollup-plugin-babel');
const rollupUglify = require('rollup-plugin-uglify');
const babelConfig = require('./babel.config');

module.exports = {
	input: "test.js",
	plugins: [
		rollupResolve(),
		rollupBabel(babelConfig),
	],
	output: [
		{
			name: "bundle",
			format: 'iife',
			file: "bundle.js"
		}
	],
}
