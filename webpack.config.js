var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: [
        './src/app.js'
    ],
    output: {
        path: './build',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
            }
        ]

    },
    plugins: [commonsPlugin]
};