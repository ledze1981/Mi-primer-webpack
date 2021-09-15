const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
 
 
module.exports = {

    mode: 'development',
 
    entry: './src/index.js',
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        clean: true,


    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options:{
                    sources: false,
                },
            },
                {
                    test: /\.css$/i, 
                    exclude: /styles.css$/i, 
                    use: ["style-loader", "css-loader"],         
                },  
                {
                    test: /styles.css$/i,  
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                      {
                        loader: 'file-loader',
                      },
                    ],
                },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),

        new MiniCssExtractPlugin(),

        new CopyPlugin ({
            patterns: [
            { from: 'src/assets/', to: 'assets/' },
            
          ],
        }),
                             
    ]
 
    
};




  
         
            







