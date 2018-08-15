/**
 * Created by Administrator on 2018/8/13.
 */
(function () {
    var user={
        init:function(){
            require.ensure([],function(){
                console.log("zhongguo");
                require("./account.js");
            },"testEnsure");
        }
    };
    module.exports=user;
})();