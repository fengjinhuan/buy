var dlsxq = angular.module('dlsxq',['ngRoute']);
dlsxq.directive('dlsxqCall',function(){
    return{
        restrict:'ECMA',
        templateUrl:'tpls/dlsxqCall.html',
        replace:true,
        scope:{
            tit:"@tit",
            con:"@con"
        }
    }
})
        // id:4,
        // title:'EDG个人工作室',
        // icon:'dls_03.png',
        // img:'dls_07.png',
        // guan:'关注',
        // guanNum:'1287',
        // map:'地区',
        // mapNum:'中部',
        // ping:'代理平台',
        // pingNum:'EDG clearLove/C',
        // www:"http://www.edg2.com",
        // nowPing:"EDG market",
        // time:"2001年",
        // dizhi:"长治市长子县丹朱镇",
        // nowPingMore:"、卡萨丁扩、按时",
        // tell:"+86 400 2222 111",
        // email:"1333333@qq.com",
        // QQ:"12321312",
        // money:"6$",
        // love:"被高大上到时看连锁"