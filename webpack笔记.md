## 一、基础应用篇

### 在讲述本节课程之前，我们先来思考一个问题：`为什么学习webpack?`


```
如果你尚没有接触过webpack，那么你对构建和打包的概念恐怕是模糊不清的。
你可能更习惯使用开箱即用的脚手架来生成你的项目配置，或者迭代着某个项目的业务，却对它的开发/生产环境搭建知之甚少。
要知道，前端架构最重要的点就在于前端工程化，而webpack则是我们搭建前端工程化环境的一个技术选型。

那么为什么是webpack呢?

在github上搜索webpack的时候，repositories的数量是157k。
事实上，无论是开源项目还是企业项目，最主流的前端工程化方案的技术选型都是webpack。
而全新版本的webpack5，则是具备了比以往版本更强大的功能，甚至是诸多企业级前端工程化技术选型的不二选择。

```

## 一、基础应用篇

### 1.1 为什么需要 Webpack

在浏览器中运行 JavaScript 有两种方法：

`第一种方式` ，引用一些脚本来存放每个功能，比如下面这个文档：

01-why-webpack/index-1.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF- 8 ">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-
scale= 1. 0 ">
<title>千锋大前端教研院-Webpack 5 学习指南</title>
</head>
<body>
<!-- HTML 代码 -->
<div>我的HTML代码</div>

<!-- 引入外部的 JavaScript 文件 -->
<script
src="https://cdn.bootcdn.net/ajax/libs/jquery/ 3. 6. 0 /jquery.mi
n.js"></script>
<script
src="https://cdn.bootcdn.net/ajax/libs/lodash.js/ 4. 17. 21 /loda
sh.core.min.js"></script>

<script src="https://cdn.bootcdn.net/ajax/libs/twitter-
bootstrap/ 5. 0. 2 /js/bootstrap.min.js"></script>

<!-- 引入我自己的 JavaScript 文件 -->
<script src="./scripts/common.js"></script>
<script src="./scripts/user.js"></script>
<script src="./scripts/authentication.js"></script>
<script src="./scripts/product.js"></script>
<script src="./scripts/inventory.js"></script>
<script src="./scripts/payment.js"></script>
<script src="./scripts/checkout.js"></script>
<script src="./scripts/shipping.js"></script>
</body>
</html>
```


此解决方案很难扩展，因为加载太多脚本会导致网络瓶颈。同时如果你不小心更改了
JavaScript文件的加载顺序，这个项目可能要崩溃。

`第二种方式` ，使用一个包含所有项目代码的大型 .js 文件, 对上面的文档做改进：

01-why-webpack/index-2.html

这种方式解决了方式一的问题，但会导致作用域、文件大小、可读性和可维护性方面的问题。如何解决这些问题，请往下阅读。

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale= 1. 0 ">
<title>千锋大前端教研院-Webpack 5 学习指南</title>
</head>
<body>
<!-- HTML 代码 -->
<div>我的HTML代码</div>
<!-- 引入我自己的 JavaScript 文件  -->
<script src="./scripts/bundle. 33520 ba 89 e.js"></script>
</body>
</html>
```



### 如何解决作用域问题

利用了立即调用函数表达式(IIFE) - Immediately invoked function expressions, 解决了大型项目的作用域问题；当脚本文件被封装在 IIFE 内部时，你可以安全地拼接或安全地组合所有文件，而不必担心作用域冲突。

```javascript
(function () {
var name = "Barry";
})();
// 无法从外部访问变量 name
name // 抛出错误："Uncaught ReferenceError: name is not
defined"
```


01-why-webpack/index-3.html

### 1.1.2 如何解决代码拆分问题

```javascript
var result = (function () {
var name = "Barry";
return name;
})();
// IIFE 执行后返回的结果：
result; // "Barry"
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF- 8 ">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale= 1.0">
<script
src="https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
<title>千锋大前端教研院-Webpack 5 学习指南</title>
</head>
<body>
<script>
// 这里我们只使用了一个join函数，确要引入整个lodash库
const str = _.join(['千锋大前端教研院', 'Webpack 5 学习指南'], '-')
console.log(str)
</script>
</body>
</html>
```                     

### 安装webpack

```
npm install - -save-dev webpack
# 或指定版本
npm install - -save-dev webpack@<version>
```
```
npm install - -save-dev webpack-cli
```
```
"scripts": {
"build": "webpack - -config webpack.config.js"
}
```
```
npm install - -global webpack
```

### 1.4 搭建开发环境

`懒加载或者按需加载`，是一种很好的优化网页或应用的方式。这种方式实际上是先把你的代码在一些逻辑断点处分离开，然后在一些代码块中完成某些操作后，立即引用或即将引用另外一些新的代码块。这样加快了应用的初始加载速度，减轻了它的总体体积，因为某些代码块可能永远不会被加载。

创建一个 math.js 文件，在主页面中通过点击按钮调用其中的函数：

09-code-splitting/src/math.js

index.js文件：

```javascript
export const add = () => {
    return x + y
}

export const minus = () => {
    return x - y
}
```
打包导出为`math.js`文件

### 1.8.5 预获取/预加载模块

```javascript
const button = document.createElement('button')
    button.textContent = '点击执行加法运算'
    button.addEventListener('click', () => {
    import(/* webpackChunkName: 'math' */ './math.js').then(({ add
    }) => {
        console.log(add( 4 , 5 ))
    })
})
document.body.appendChild(button)
```

1. `prefetch (预获取)`：将来某些导航下可能需要的资源 会生成 `<link rel="prefetch" href="math.js">`

2. `preload (预加载)`：当前导航下可能需要资源


### 1.9 缓存

将第三方库(library)（例如 lodash）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，同时还能保证 client 代码和 server 代码版本一致。 我们在optimization.splitChunks 添加如下 cacheGroups 参数并构建：

10-caching/webpack.config.js

```javascript
splitChunks: {
    cacheGroups: {
        vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
        },
    },
},
```

## 二、高级应用篇

1. `开发环境`(mode=development),追求强大的开发功能和效率，配置各种方便开发的功能;

2. `生产环境`(mode=production),追求更小更轻量的bundle(即打包产物);

### 2.1.3 模块热替换与热加载

模块热替换(HMR - hot module replacement)功能会在应用程序运行过程中，替换、添加或删除 模块，而无需重新加载整个页面。启用 webpack 的 热模块替换 特性，需要配置devServer.hot参数

```javascript
module.exports = {
    devServer: {
        // 让你的服务器可以被外部访问
        host: ' 0. 0. 0. 0 ',
    },
};
```
```javascript
module.exports = {
    devServer: {
        // 模块热替换
        hot: true,
    },
};
```

### 2.1.4 eslint

`eslint`是用来扫描我们所写的代码是否符合规范的工具。往往我们的项目是多人协作开发的，我们期望统一的代码规范，这时候可以让eslint来对我们进行约束。 严格意义上来说，eslint配置跟webpack无关，但在工程化开发环境中，它往往是不可或缺的。


## 2.2.1 Webpack 模块与解析原理

能在webpack工程化环境里成功导入的模块，都可以视作webpack模块。 与Node.js 模块相比，webpack 模块 能以各种方式表达它们的依赖关系。下面是一些示例：

- ES2015 `import` 语句

- CommonJS `require()` 语句

- AMD `define` 和 `require` 语句

- css/sass/less 文件中的 `@import` 语句

- stylesheet `url(...)` 或者 HTML`<img src=...>` 文件中的图片链接

### 1 、webpack中的模块路径解析规则

通过内置的`enhanced-resolve`，webpack 能解析三种文件路径：

#### 绝对路径

```javascript
const webpack = require('webpack');
const compiler = webpack({
// ...这是我们配置的webpackconfig对象
})
```

```javascript
import _ from 'lodash';
// 或者
const add = require('./utils/add');
```

#### 相对路径

在 import/require 中给定的相对路径，enhanced-resolve会拼接此上下文路径，来生成模块的绝对路径(path.resolve(__dirname, RelativePath) 。 这也是我们在写代码时最常用的方式之一，另一种最常用的方式则是模块路径。

#### 模块路径

也就是在resolve.modules中指定的所有目录检索模块(node_modules里的模块已经被默认配置了)。 你可以通过配置别名的方式来替换初始模块路径， 具体请参照下面resolve.alias 配置选项。

```javascript
module.exports = {
    resolve:{
        alias:{
            // 相对路径，@从src目录下查找文件
            "@":path.resolve(__dirname,'./src')
        },
        // webpack会按照数组顺序去解析这些后缀名，对于同名的文件，webpack总是会先解析列在数组首位的后缀名的文件。
        extensions:['.json','.js','.vue']
    }
};
```

### 2.2.3 外部扩展(Externals)

有时候我们为了减小bundle的体积，从而把一些不变的第三方库用cdn的形式引入进来，比如jQuery： index.html

```javascript
module.exports = {
    externalsType:'script',
    externals: {
        jquery: [
            'https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js',
            '$'
        ],
    },
};
```

### 2.2.4 依赖图(dependency graph)

bundle 分析(bundle analysis) 工具：

1. `webpack-chart`: webpack stats 可交互饼图。

2. `webpack-visualizer`: 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。

3. `webpack-bundle-analyze`r：一个 plugin 和 CLI 工具，它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。

4. `webpack bundle optimize helper`：这个工具会分析你的 bundle，并提供可操作的改进措施，以减少 bundle 的大小。

5. `bundle-stats`：生成一个 bundle 报告（bundle 大小、资源、模块），并比较不同构建之间的结果。


### 2.3 扩展功能

#### 2.3.1 PostCSS 与 CSS模块

`PostCSS` 是一个用 JavaScript 工具和插件转换 CSS 代码的工具。比如可以使用`Autoprefixer` 插件自动获取浏览器的流行度和能够支持的属性，并根据这些数据帮我们自动的 为 CSS 规则添加前缀，将最新的 CSS 语法转换成大多数浏览器都能理解的语法。
CSS 模块 能让你永远不用担心命名太大众化而造成冲突，只要用最有意义的名字就 行了。

 PosetCSS 与 Webpack 结合，需要安装 `style-loader, css-loader, postcss-loader`

```javascript
module: {
    rules: [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                    importLoaders: 1 ,
                }
            },
            {
                loader: 'postcss-loader'
            }] 
        } 
    ] 
} 
```
```javascript
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-nested')
    ]
}
```
```javascript
"browserslist": [
    "> 1 %", // 全球浏览器使用率大于1%或大于等于1%。
    "last 2 versions"  // 最新的两个版本
]
```


### 2.3.2 Web Works

`webWorkers`提供了js的后台处理线程的API，它允许将复杂耗时的单纯js逻辑处理放在浏览器后台线程中进行处理，让js线程不阻塞UI线程的渲染。多个线程间也是可以通过相同的方法进行数据传递。

需要单独写一个js脚本，然后使用new Worker来创建一个Work线程实例。这意味着并不是将这个脚本当做一个模块引入进来，而是单独开一个线程去执行这个脚本。

```javascript
self.onmessage = ({ data: { question } }) => {
    self.postMessage({
        answer: 42 ,
    })
}
```
###### // 下面的代码属于业务逻辑

```javascript
const worker = new Worker(new URL('./work.js', import.meta.url));
worker.postMessage({
    question:'hi，那边的workder线程，请告诉我今天的幸运数字是多少？',
});
worker.onmessage = ({ data: { answer } }) => {
    console.log(answer);
};
```
