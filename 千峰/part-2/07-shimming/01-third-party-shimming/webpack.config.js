const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ],
  module: {
    rules: [
      {
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?wrapper=window'
      },
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?type=commonjs&exports=file,multiple|helpers.parse|parse'
      }
    ]
  }
}