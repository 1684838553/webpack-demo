const path = require('path')
module.exports = {
  mode: 'development',
  entry: './src/app.js',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },

    extensions: ['.json', '.js', '.vue']
  }
}