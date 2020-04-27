const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production' //set isProduction to true id env is 'production
    console.log(`IsProduction: ${isProduction}`)
    return{
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
    devtool: isProduction ? 'source-map' :'cheap-module-eval-source-map',
    devServer : {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
    }
}