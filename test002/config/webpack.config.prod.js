const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    output: {
        // 将编译好的js文件单独放在一个文件夹里面
        filename: 'scripts/[name].[contenthash].js',
        // 配置静态资源打包后的路径，contenthash根据内容生成hash名，ext生成相应的后缀名
        assetModuleFilename: 'image/[contenthash][ext]',
    },
    mode: 'production',
    optimization: {
        minimizer: [
            // 优化和压缩 CSS,生产环境
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
    },
    performance: {
        hints: false   // 编译时不做提示
    }
}
