const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 多入口
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    },
    output: {
        filename: 'script/[name].js',
        path: path.resolve(__dirname, '../dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',  // 打包后的入口文件文件名
            inject: 'body',  // 规定生成的script标签放置位置
            chunks: ['index']
        }),
        new HtmlWebpackPlugin({
            template: './src/other.html',
            filename: 'other.html',
            inject: 'body',
            chunks: ['other']
        })
    ]
}
