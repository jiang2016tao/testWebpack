/**
 * Created by Administrator on 2017/9/16.
 */
const path = require('path');
const webpack=require("webpack");
var htmlWebpackPlugin = require('html-webpack-plugin');
const ROOT_PATH=path.resolve(__dirname);
const SRC_PATH=path.resolve(ROOT_PATH,"app");
const NODE_MODULES=path.resolve(__dirname,"node_modules");
console.log("SRC_PATH : "+SRC_PATH);
module.exports={
    entry:{
        main:"./app/index.js",
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
        new htmlWebpackPlugin({
            title:"欢迎",
            chunks:["build"]
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','manifest'] // 指定公共 bundle 的名字。
        })
    ]
};