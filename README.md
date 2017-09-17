# webpack的安装
   在安装的过程中，第一次使用npm install webpack，这样在当前目录执行webpack命令，发现报不是内部命令；使用npm install webpack -g就可以了。
# webpack打包命令
webpack app/index.js build/build.js
# webpack配置文件

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
配置参数的说明参考：http://www.cnblogs.com/skylar/p/webpack-module-bundler.html
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

