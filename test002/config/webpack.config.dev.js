module.exports = {
    output: {
        filename: 'scripts/[name].js',
    },
    mode: 'development',
    devtool: 'inline-source-map',  // 精准定位代码行数
    // devServer: {
    //     static: './dist'
    // },
}
