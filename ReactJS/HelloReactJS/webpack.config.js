var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var ROOT_DIR = path.resolve(__dirname, "src");
var APP_DIR = path.resolve(__dirname, "src/jsx");
var BUILD_DIR = path.resolve(__dirname, "src/js");

var config = {
    context: ROOT_DIR,
    devtool: debug ? "inline-sourcemap" : null,
    entry: APP_DIR + '/client.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'client.min.js'
    },
    module : {
        loaders : [{
            test: /\.jsx?/,
            include: APP_DIR,
            loader: "babel",
            query: {
                presets: ["react", "es2015"]
            }
        }]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
    ]
};

module.exports = config;

