const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
    app2: './src/app2.js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new BundleAnalyzerPlugin()
  ]
}