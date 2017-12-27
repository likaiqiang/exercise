const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require("path")
// const extractSass = new ExtractTextPlugin({
//     filename: "style.css",
//     disable: process.env.NODE_ENV === "development"
// })

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
}