const path = require('path')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: mode,

    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    //without additional settings, this will reference .babelrc
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(css)$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader'],
              },
              {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
              },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
       
      ],

    devtool: 'source-map', 
    
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
      }
}