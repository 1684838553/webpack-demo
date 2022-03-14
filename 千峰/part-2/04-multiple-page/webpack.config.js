const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: '多页面应用',
      template: './index.html',
      inject: 'body',
      filename: 'chanel1/index.html',
      chunks: ['main', 'lodash'],
      publicPath: 'http://www.b.com/'
    }),

    new HtmlWebpackPlugin({
      template: './index2.html',
      inject: 'body',
      filename: 'chanel2/index2.html',
      chunks: ['main2', 'lodash'],
      publicPath: 'http://www.a.com/'
    })
  ],

  entry: {
    main: {
      import: ['./src/app2.js', './src/app.js'],
      dependOn: 'lodash',
      filename: 'chanel1/[name].js'
    },
    main2: {
      import: './src/app3.js',
      dependOn: 'lodash',
      filename: 'chanel2/[name].js'
    },
    lodash: {
      import: 'lodash',
      filename: 'common/[name].js'
    }
  },

  output: {
    clean: true
  }
}