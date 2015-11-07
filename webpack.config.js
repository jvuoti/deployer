var webpack = require('webpack');
module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./js/app.tsx"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jpe?g$|\.svg$|\.woff\d?$|\.ttf$|\.eot$/, loader: "file-loader" },
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]

};