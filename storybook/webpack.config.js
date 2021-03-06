/**
 * External dependencies
 */
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const path = require( 'path' );

/**
 * Internal dependencies
 */
const { getAlias, getMainConfig } = require( '../bin/webpack-helpers.js' );
const tsConfig = require( '../tsconfig.json' );

const aliases = Object.keys( tsConfig.compilerOptions.paths ).reduce(
	( acc, key ) => {
		const currentPath = tsConfig.compilerOptions.paths[ key ][ 0 ];
		acc[ key.replace( '/*', '' ) ] = path.resolve(
			__dirname,
			'../' + currentPath.replace( '/*', '/' )
		);
		return acc;
	},
	{}
);

module.exports = ( { config: storybookConfig } ) => {
	const wooBlocksConfig = getMainConfig( { alias: getAlias() } );
	storybookConfig.resolve.alias = {
		...storybookConfig.resolve.alias,
		...aliases,
	};
	storybookConfig.module.rules.push(
		{
			test: /\/stories\/.+\.js$/,
			loaders: [ require.resolve( '@storybook/source-loader' ) ],
			enforce: 'pre',
		},
		...wooBlocksConfig.module.rules
	);

	storybookConfig.plugins.push(
		new MiniCssExtractPlugin( {
			filename: `[name].css`,
		} )
	);

	return storybookConfig;
};
