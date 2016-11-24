var path = require("path");
module.exports = {
    context: path.resolve(__dirname + "/app"),
    entry: "./app.js",
    output: {
        path: path.resolve(__dirname + "/dist"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    devServer: {
      inline: true
    },
    devtool: 'inline-source-map'
}
