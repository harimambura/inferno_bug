module.exports = {
	babelrc: false, // stops babel from using .babelrc files
	presets: [
		[
			__dirname + '/node_modules/@babel/preset-env',
			{
				'targets': {
					'browsers': [
						'ie >= 11',
						'edge >= 15',
						'firefox >= 60',
						'chrome >= 66'
					]
				},
				'modules': false
			}
		]
	],
	plugins: [
		[__dirname + '/node_modules/babel-plugin-inferno', {"imports": false}],
		__dirname + '/node_modules/@babel/plugin-syntax-jsx',
		__dirname + '/node_modules/@babel/plugin-transform-flow-strip-types'
	],
	exclude: [
		'node_modules/**'
	]
}
