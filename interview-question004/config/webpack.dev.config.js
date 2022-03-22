
const commonConfig = require('./webpack.base.config')
const { merge } = require('webpack-merge')

const devConfig = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', // 将样式插入style标签中
                    'css-loader', // 处理css文件之间的引用关系
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'autoprefixer'
                                    ]
                                ]
                            }
                        }
                    },  // 处理兼容性，依赖autoprefixer插件
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        static: '../dist',
        open: true, // 启动服务器，自动打开浏览器
        compress: true, // 开启gzip压缩
        proxy: {

        }
    }
}
// 调用smart方法进行合并
module.exports = merge(commonConfig, devConfig)
