/* plugin que vai adicionar o script gerado no html */
const htmlWebpackPlugin = require("html-webpack-plugin");
// importando o node path module
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
        })
    ]
}