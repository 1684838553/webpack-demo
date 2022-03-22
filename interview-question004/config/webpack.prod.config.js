const commonConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

const {
    merge
} = require('webpack-merge')

const prodConfig = {
    mode: "production",
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
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
                }, // 处理兼容性，依赖autoprefixer插件
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.[contentHash].css'
        }),
    ],
    optimization: {
        minimizer: [
            // 压缩JS
            new TerserWebpackPlugin(),
            // 压缩CSS
            new CssMinimizerWebpackPlugin()
        ],
        // 代码分割
        splitChunks: {
            /* 
                all 对同步异步代码都做分割
                async 只对异步代码做分割
                initial 只对同步代码做分割
                同步代码 import loadsh from 'loadsh'
                异步代码 import('loadsh')
            */
            chunks: 'all',
            cacheGroups: {
                // 第三方模块
                vendor: {
                    // 每个组的名字
                    name: 'vendor',
                    // 优先级，优先级越高，越先检测处理
                    // 第三方模块，可能会被作为公共模块来监测处理，通过优先级，达到先被当作第三方模块来检测处理
                    priority: 1,
                    // 检测方法，检测是否来自/node_modules/
                    test: /node_modules/,
                    // 实际开发中，可以写 5 * 1024 ，即5kb
                    // 文件超过minSize设定值，就会进行代码分割
                    minSize: 0,
                    // 检测模块被引用几次
                    // 对于第三方模块而言，引用一次就应该单独打包
                    minChunks: 1
                },
                common: {
                    name: 'common',
                    priority: 0,
                    minSize: 0,
                    minChunks: 2
                }
            }
        }
    }
}
// 调用smart方法进行合并
module.exports = merge(commonConfig, prodConfig)
