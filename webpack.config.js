const CopyFilePlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        "./js/index.js": "./src/ts/index.ts"
    },
    output: {
        filename: "[name]",
        clean: true
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts$/, use: "ts-loader" }
        ]
    },
    plugins: [
        new CopyFilePlugin({
            patterns: [
                {
                    from: "./src/html/index.html",
                    to: "./html/index.html"
                }
            ]
        })
    ]
};
