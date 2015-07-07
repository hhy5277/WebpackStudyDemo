var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: [
        "jquery",
        "bootstrap/js/bootstrap",
        "bootstrap/css/bootstrap.css",
        "./entry.js"
    ],
    output: {
        path: path.join(__dirname, "extratext-provide"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")/*loaders: ["style-loader", "css-loader"]*/},
            { test: /\.png$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.woff$/, loader: "file-loader" },
            { test: /\.woff2$/, loader: "file-loader" }
        ]
    },
    resolve: {
        alias: {
            bootstrap: "bootstrap/dist"
        }
    },
    // ProvidePlugin与ExtractTextPlugin冲突，导致ProvidePlugin失效
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery"
        })
    ],
    plugins: [
        new ExtractTextPlugin("base.css")
    ]
}