var webpack = require('webpack');  
module.exports = {  
    entry: [
      'webpack/hot/only-dev-server',
      "./js/app.jsx"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style-loader!css-loader"  },
            { test: /\.jpe?g$|\.svg$|\.woff\d?$|\.ttf$|\.eot$/, loader: "file-loader" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};