const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true ,  // 每次打包前清理dist
        // 配置静态资源打包后的路径，contenthash根据内容生成hash名，ext生成相应的后缀名
        assetModuleFilename:'image/[contenthash][ext]' 
    },
    mode: 'development',
    devtool: 'inline-source-map',  // 精准定位代码行数
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',  // 模板
            filename: 'app.html',  // 打包后的入口文件文件名
            inject: 'body'  // 规定生成的script标签放置位置
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
                generator:{
                    filename:'image/[contenthash][ext]'
                }
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
                parser:{
                    dataUrlCondition:{
                        maxSize:4*1024
                    }
                }
            },
        ]
    }
}
