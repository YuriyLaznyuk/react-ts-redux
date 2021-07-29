const Dotenv = require('dotenv-webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
entry:"./src/index.tsx",

    // output bundle file
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        publicPath: '/'
    },

    resolve:{
    extensions:[".tsx",".ts",".js"],
    },

    devServer: {
        port: 4040,
        watchContentBase: true,
        historyApiFallback: true,
        open: true
    },
    performance: {
        hints: false
    },
    // Loaders rules
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader',
                    'sass-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg|)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin(),
        new Dotenv()
    ],
};