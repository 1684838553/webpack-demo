## 1. HtmlWebpackPlugin

该插件将为您生成一个 HTML5 文件，其中使用script标签将所有 webpack 捆绑包包含在正文中。`实现了自动生成html入口文件和引用js文件的功能`


## 2. MiniCssExtractPlugin
本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载

## 3. CssMinimizerWebpackPlugin

这个插件使用 cssnano 优化和压缩 CSS。
仅在生产环境开启 CSS 优化。

如果还想在开发环境下启用 CSS 优化，请将 optimization.minimize 设置为 true

## 4. regeneratorRuntime插件

`regeneratorRuntime`是webpack打包生成的全局辅助含糊，有babel生成，用于兼容async/await语法

`regeneratorRuntime is not defined`这个错误是未能正确配置babel


```
npm i html-webpack-plugin -D


npx webpack --watch  // 实时监测文件变化


npm i webpack-dev-server -D
npx webpack-dev-server --open // 访问http://localhost:8080/

npm i css-loader -D

npm i less-loader less -D

npm i mini-css-extract-plugin -D

npm i css-minimizer-webpack-plugin -D

npm i csv-loader xml-loader -D


npm i babel-loader @babel/core @babel/preset-env -D
npm i @babel/runtime -D
npm i @babel/plugin-transform-runtime -D
```

