const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: [
        path.join(__dirname,'src', 'modules', 'landing.js'),
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js",
        clean: true,
    },
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                "css-loader",
                {
                    loader: 'url-tilde-loader',
                    options: {
                      replacement: process.env.NODE_ENV === 'production' ? '/node_modules/' : ''
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'image-webpack-loader',
                  options: {
                    pngquant: {
                      quality: [0.55, 0.90],
                      speed: 1
                    },
                  }
                },
              ],
            },
           {
            test: /\.(html)$/,
            use: ['html-loader']
            }
          
        ],
    },
    plugins:[ 
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'src/templates','index.html'),
        }),
        
    ],
    devServer: {
        static: path.resolve(__dirname, 'src','templates'),
        host: "0.0.0.0",
        port: 8000,
        hot: true,
    },
}