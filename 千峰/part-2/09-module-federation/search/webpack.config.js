const HtmlWebpackPlugin = require('html-webpack-plugin')

const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'search',
      filename: 'remoteEntry.js',
      remotes: {
        nav: 'nav@http://localhost:3003/remoteEntry.js',
        home: 'home@http://localhost:3001/remoteEntry.js'
      }
    })
  ]
}