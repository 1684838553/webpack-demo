const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,  // 每次打包前清理dist
        // 配置静态资源打包后的路径，contenthash根据内容生成hash名，ext生成相应的后缀名
        assetModuleFilename: 'image/[contenthash][ext]'
    },
    mode: 'development',
    // mode: 'production', // 使用 CssMinimizerPlugin 插件
    devtool: 'inline-source-map',  // 精准定位代码行数
    plugins: [
        // 实现了自动生成html入口文件和引用js文件的功能
        new HtmlWebpackPlugin({
            template: './index.html',  // 模板
            filename: 'app.html',  // 打包后的入口文件文件名
            inject: 'body'  // 规定生成的script标签放置位置
        }),
        // 将 CSS 提取到单独的文件中
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css'
        })
    ],
    devServer: {
        static: './dist'
    },
    module: {
        rules: [
            {
                test: /\.png$/,
                // 生成一个url
                type: 'asset/resource',
                // 配置静态资源打包后的路径,优先级比assetModuleFilename高
                generator: {
                    filename: 'image/[contenthash][ext]'
                }
            },
            {
                // 都是字体资源类型
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                // 生成base64格式路径
                type: 'asset/inline',
            },
            {
                test: /\.txt$/,
                // 导出资源源代码
                type: 'asset/source',
            },
            {
                test: /\.jpg$/,
                // asset 在asset/inline 和 asset/resource中选择，默认文件大小8kb
                type: 'asset',
                // parser 解析器 文件大于4KB，生成一个资源文件，否则，生成一个base64
                parser: {
                    dataUrlCondition: {
                        maxSize: 4 * 1024
                    }
                }
            },
            {
                // 加载css，less文件
                test: /\.(css|less)$/,
                // 两个loader顺序不能颠倒，style-loader将样式打包，在head标签里面生成style
                // use:['style-loader','css-loader','less-loader']
                // 将css样式抽离出单独的文件
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            },
            {
                test: /\.(csv|tsv)$/,
                use: 'csv-loader'
            },
            {
                test: /\.xml$/,
                use: 'xml-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            // 优化和压缩 CSS,生产环境
            new CssMinimizerPlugin()
        ],
    }
}
