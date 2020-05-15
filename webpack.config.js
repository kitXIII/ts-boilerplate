const path = require('path');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        library: 'core',
        libraryTarget: 'var',
        filename: 'core.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [new EsmWebpackPlugin()]
};
