webpack官网文档：https://webpack.github.io/docs/
# webpack的安装
   在安装的过程中，第一次使用npm install webpack，这样在当前目录执行webpack命令，发现报不是内部命令；使用npm install webpack -g就可以了。
# webpack打包命令
webpack app/index.js build/build.js
# webpack配置文件
```
const path = require('path');
module.exports={
    entry:"./app/index.js",
    output:{
        path: path.resolve(__dirname, './bin'),
        filename:"build.js"
    },
    module:{
        loaders:[{
            test:/.css$/,
            loader:["style","css"],
            exclude:"/node_modules/"
        }]
    },
    resolve:{
        extensions:['js','css','jsx']
    }
};
```
配置参数的说明参考：http://www.cnblogs.com/skylar/p/webpack-module-bundler.html  
```
// 默认加载的包声明
        new webpack.ProvidePlugin({
            _: 'lodash',
            $: "jquery"
        }),
```
这样就可以在任何页面都可以使用jquery,而不用require去引入了。  
# npm 删除模块
【npm uninstall xxx】删除xxx模块；
【npm uninstall -g xxx】删除全局模块xxx；
# webpack-server-dev遇到的问题
第一次使用命令webpack-server-dev启动发现总是报错：
```
ERROR in (webpack)/node_modules/querystring-es3/index.js
Module not found: Error: Can't resolve './decode' in 'C:\Users\Administrator\App
Data\Roaming\npm\node_modules\webpack\node_modules\querystring-es3'
 @ (webpack)/node_modules/querystring-es3/index.js 3:33-52
 @ (webpack)/node_modules/url/url.js
 @ (webpack)-dev-server/client?http://localhost:8080
 @ multi (webpack)-dev-server/client?http://localhost:8080 ./app/index.js

ERROR in (webpack)/node_modules/querystring-es3/index.js
Module not found: Error: Can't resolve './encode' in 'C:\Users\Administrator\App
Data\Roaming\npm\node_modules\webpack\node_modules\querystring-es3'
 @ (webpack)/node_modules/querystring-es3/index.js 4:37-56
 @ (webpack)/node_modules/url/url.js
 @ (webpack)-dev-server/client?http://localhost:8080
 @ multi (webpack)-dev-server/client?http://localhost:8080 ./app/index.js
```
找了好久，发现是webpack.config.js里的配置文件写错了，那个自动补充后缀名的属性有问题。
将
```
resolve:{
        extensions:['js','css','jsx']
    }
```
修改为
```
resolve:{
        extensions:[".js",".css","jsx"]
    }
```
这样问题就解决了。
页面刷新实时：webpack-dev-server --progress --color；发现以前使用的命令：webpack-dev-server --hot --inline不可以了，也许是1.0的版本可以。
可以在package.json里配置自定义的npm命令.启动服务就只需要输入npm start
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start":"webpack-dev-server --progress --color"
  },
```
# html-webpack-plugin
参考： http://www.cnblogs.com/wonyun/p/6030090.html。具体什么情况下使用，摸不清。结合目前的项目看看吧
# Babel的使用
参考官网：http://babeljs.cn/
webstorm自动将ES6语法js转换为es5的配置：http://www.cnblogs.com/pizitai/p/6830470.html
