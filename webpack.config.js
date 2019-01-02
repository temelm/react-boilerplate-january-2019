const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = (env) => {
  const isProdBuild = (env.production === true)
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            (isProdBuild) ? miniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(gif|ico|jpe?g|png|svg)$/,
          exclude: /node_modules/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new htmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),
      new miniCssExtractPlugin({
        filename: 'bundle.css'
      })
    ],
    optimization: {
      minimizer: [
        new optimizeCssAssetsWebpackPlugin({}),
        new uglifyjsWebpackPlugin({
          parallel: true
        })
      ]
    }
  }
}
