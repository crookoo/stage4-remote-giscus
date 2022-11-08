const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test html-react-parser',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html', // output file
            favicon: path.resolve(__dirname, './public/favicon.svg')
        }),
        new CleanWebpackPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
};