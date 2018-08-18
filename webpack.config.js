/**
 * Created by Administrator on 2017/9/16.
 */
const path = require('path');
const webpack=require("webpack");
var htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin=require("clean-webpack-plugin");
const ROOT_PATH=path.resolve(__dirname);
const SRC_PATH=path.resolve(ROOT_PATH,"app");
const NODE_MODULES=path.resolve(__dirname,"node_modules");
const BUILD_PATH=path.resolve(ROOT_PATH,"build/build");
console.log("SRC_PATH : "+SRC_PATH);
module.exports={
    entry:{
        main:"./app/index.js",
        screen:"./app/screen.js",
        vendor:'async'
    },
    output:{
        path: path.resolve(__dirname, './build'),
        filename:"build/[name].[chunkhash].js",
        chunkFilename:'build/[name].[chunkhash].chunk.js'
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
        }],
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader?cacheDirectory"
                },
                // include:SRC_PATH,
                exclude:NODE_MODULES
            }
        ]
    },
    resolve:{
        extensions:[".js",".css","jsx"]
    },
    plugins:[
        new CleanWebpackPlugin(BUILD_PATH),//清空编译的目录
        //入口页面打包时会自动将入口js文件加载进去
        new htmlWebpackPlugin({
            title:"欢迎",
            // chunks:["build"]
            filename:"index.html",
            template:'./index.html',
            chunks:["main"],    //需要引入的chunk
            inject:true,
            hash:true
        }),
        new htmlWebpackPlugin({
            title:"欢迎",
            // chunks:["build"]
            filename:"screen.html",
            template:'./screen.html',
            chunks:["screen"],
            inject:true,
            hash:true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','manifest'] // 指定公共 bundle 的名字。
        })
    ]
};