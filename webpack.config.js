const path = require('path');

module.exports = {
    entry: './src/app.js', // entry point 
    // entry: './src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' // output 
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: [ // use is the same as loader, but for multople loaders... I ghuess
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.s?css$/ // looking for any file that end with .css
            }
        ]
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer : {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};