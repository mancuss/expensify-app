const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env === 'production' //set isProduction to true id env is 'production
    const CSSExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
    console.log(`IsProduction: ${isProduction}`)
    return{
        entry: './src/app.js', // entry point 
    // entry: './src/playground/hoc.js',
    output: {
        path: path.join(__dirname, 'public', 'dist'),
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
                test: /\.s?css$/, // looking for any file that end with .css
                use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
            }
        ]
    },
    plugins: [
        CSSExtract
    ],
    mode: 'development',
    devtool: isProduction ? 'source-map' :'inline-source-map',
    devServer : {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/dist/',
        historyApiFallback: true
    }
    }
}