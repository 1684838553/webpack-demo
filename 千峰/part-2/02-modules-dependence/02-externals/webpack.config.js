const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',
  plugins: [
    new HtmlWebpackPlugin()
  ],

  externalsType: 'script',
  externals: {
    jquery: [
      'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
      '$'
    ]
  }
}