const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        port: 3002,
    },
    entry: {
        main: path.resolve(__dirname, './src/index.tsx'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
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
            title: 'localhost:3002',
            template: path.resolve(__dirname, './public/template.html'),
            filename: 'index.html', // output file
            favicon: path.resolve(__dirname, './public/favicon.svg'),
        }),
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'app2',
            filename: 'remoteEntry.js',
            exposes: {
                './App': './src/App.tsx',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^18.2.0',
                    eager: true,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: '^18.2.0',
                    eager: true,
                }
            },
        }),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: 'auto',
    },
};