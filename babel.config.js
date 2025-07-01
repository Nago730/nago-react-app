module.exports = {
	presets: [
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
				importSource: 'nago-react',
			},
		],
		'@babel/preset-typescript',
	],
};
