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
});
var dlsxqArr = [
    {
        id:1,
        url:'dlsxq.png',
        money:'8$',
        love:'有纯ECN PRO的可开工的是',
        title:'Imsforex'
    },
    {
        id:2,
        url:'dls_07.png',
        money:'18$',
        love:'抱财网 科技Sprovice Disk',
        title:'Provider'
    },
    {
        id:3,
        url:'dlsxq.png',
        money:'2$',
        love:'你有你的收到货的S provider',
        title:'configSvo'
    },
    {
        id:4,
        url:'s9.png',
        money:'1$',
        love:'FXCM 你的独特信息定制者及师',
        title:'SpiansolLov'
    }
]
dlsxq.controller('dlsxq',function($scope){
    $scope.dlsxqArr=dlsxqArr;
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