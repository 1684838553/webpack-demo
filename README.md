## 插件

### 1. HtmlWebpackPlugin

该插件将为您生成一个 HTML5 文件，其中使用script标签将所有 webpack 捆绑包包含在正文中。`实现了自动生成html入口文件和引用js文件的功能`


### 2. MiniCssExtractPlugin
本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载

### 3. CssMinimizerWebpackPlugin

这个插件使用 cssnano 优化和压缩 CSS。
仅在生产环境开启 CSS 优化。

如果还想在开发环境下启用 CSS 优化，请将 optimization.minimize 设置为 true

### 4. regeneratorRuntime插件

`regeneratorRuntime`是webpack打包生成的全局辅助含糊，有babel生成，用于兼容async/await语法

`regeneratorRuntime is not defined`这个错误是未能正确配置babel

### 5. TerserWebpackPlugin

该插件使用 terser 来压缩 JavaScript。

### 6. [webpack-merge](https://www.npmjs.com/package/webpack-merge)

提供了一个merge连接数组和合并对象创建新对象的函数

### 7. [BundleAnalyzerPlugin](https://www.npmjs.com/package/webpack-bundle-analyzer) 

1. 了解捆绑包中的真正内容 
2. 找出哪些模块构成了其最大的尺寸 
3. 查找错误到达的模块

### 插件安装命令

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


npm i lodash -D

npm i terser-webpack-plugin -D

npm i webpack-merge -D

npm i eslint -D
npx eslint --init

npm i webpack-bundle-analyzer -D


npm i typescript ts-loader -D
npx tsc --init // 生成tsconfig.json文件

npm i workbox-webpack-plugin -D
```

## source-map
[详解Webpack中的sourcemap](https://segmentfault.com/a/1190000008315937)

> eval： 使用eval包裹模块代码
> 
> source-map： 产生.map文件
> 
> cheap： 不包含列信息（关于列信息的解释下面会有详细介绍)也不包含loader的sourcemap
> 
> module： 包含loader的sourcemap（比如jsx to js ，babel的sourcemap）
> 
> inline： 将.map作为DataURI嵌入，不单独生成.map文件（这个配置项比较少见）

1. eval`默认值`： 生成代码 每个模块都被eval执行，并且存在@sourceURL。

2. cheap-eval-source-map： 转换代码（行内） 每个模块被eval执行，并且sourcemap作为eval的一个dataurl

3. cheap-module-eval-source-map： 原始代码（只有行内） 同样道理，但是更高的质量和更低的性能

4. eval-source-map： 原始代码，同样道理，但是最高的质量和最低的性能

5. cheap-source-map： 转换代码（行内） 生成的sourcemap没有列映射，从loaders生成的sourcemap没有被使用

6. cheap-module-source-map： 原始代码（只有行内） 与上面一样除了每行特点的从loader中进行映射

7. source-map： 原始代码最好的sourcemap质量有完整的结果，但是会很慢。

**`注意:生产环境一般不开启sourcemap功能，原因：`**

1. 通过bundle和sourcemap文件，可以反编译出源码，即线上产物有sourcemap文件的话，有暴露源码风险

2. sourcemap文件体积相对较大，生产环境追求更小更轻量的bundle

## [devServer](https://webpack.docschina.org/configuration/dev-server/)

1. static

2. proxy 启用代理

```javascript
module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
```

3. port 指定监听的端口号

4. open 在服务器已经启动后打开浏览器。设置其为 true 以打开你的默认浏览器

5. onListening 在 webpack-dev-server 开始监听端口连接时执行自定义函数的能力。

```javascript
module.exports = {
  //...
  devServer: {
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      const port = devServer.server.address().port;
      console.log('Listening on port:', port);
    },
  },
};
```

6. host 指定要使用的 host

```javascript
// 如果你想让你的服务器可以被外部访问，像这样指定：

module.exports = {
  devServer: {
    host: '0.0.0.0',
  },
};
```

7. headers 为所有响应添加headers

8. https `boolean ` 默认情况下，开发服务器将通过 HTTP 提供服务。

9. http2 `boolean ` HTTP/2 带有自签名证书 `ssl`

10. compress

11. ...

## 热替换和热加载

- `热替换`:允许在运行时更新所有类型的模块，而无需完全刷新


```javascript
// 如果你想让你的服务器可以被外部访问，像这样指定：

module.exports = {
  devServer: {
    // 时时进行更新和替换
   hot:true,
   liveReload: true
  },
};
```

## eslint

- 提供一个插件化的javascript代码检测工具。






