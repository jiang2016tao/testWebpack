/**
 * Created by Administrator on 2017/9/16.
 */
const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:"./app/index.js",
    output:{
        path: path.resolve(__dirname, './build'),
        filename:"build/build.js"
    },
    // /*devServer: {
    //     historyApiFallback: true,
    //     inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    // },*/
    module:{
        loaders:[{
            test:/.css$/,
            loader:["style","css"],
            exclude:"/node_modules/"
        }]
    },
    resolve:{
        extensions:[".js",".css","jsx"]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:"欢迎",
            chunks:["build"]
        })
    ]
};