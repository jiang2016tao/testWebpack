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

