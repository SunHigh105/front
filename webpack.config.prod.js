const loader = require('sass-loader');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const MODE = "development";
const enabledSourceMap = MODE === "development";

require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname.replace('front', '')}/public`,
    filename: 'js/app.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new webpack.DefinePlugin({
      MAP_API_KEY: JSON.stringify(process.env.MAP_API_KEY),
      BASE_URL: JSON.stringify(process.env.BASE_URL),
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': `${__dirname}`
    }
  }
}
