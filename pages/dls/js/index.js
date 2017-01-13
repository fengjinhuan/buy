var dlsArr = [
    [
        {
            id:2,
            title:'华南'
        },
        {
            id:3,
            title:'华北'
        },
        {
            id:4,
            title:'华中'
        },
        {
            id:5,
            title:'西北'
        }
    ],
    [
        {
            id:2,
            title:'XM'
        },
        {
            id:3,
            title:'嘉盛'
        },
        {
            id:4,
            title:'福汇英国'
        }
    ]
]
var dlsItem = [
    {
        id:1,
        title:'IG小米个人工作室',
        icon:'dls_03.png',
        img:'dls_07.png',
        guan:'关注',
        guanNum:'213989',
        map:'地区',
        mapNum:'华东',
        ping:'代理平台',
        pingNum:'IG Market/Tri拓',
        www:"http://www.yocajr.com",
        nowPing:"IG market",
        time:"2007年",
        dizhi:"广州市天河区天府路嘉园商务大厦3楼",
        nowPingMore:"、嘉盛国际、应诺",
        tell:"+86 400 6932 569",
        email:"1234569@qq.com",
        QQ:"569874563",
        money:"8$",
        love:"有纯ECN PRO的可开骨把点击"
    },
    {
        id:2,
        title:'RNG皇族工作室',
        icon:'dls_03.png',
        img:'dls_07.png',
        guan:'关注',
        guanNum:'98978',
        map:'地区',
        mapNum:'华北',
        ping:'代理平台',
        pingNum:'RNG Uzi/Jian豪',
        www:"http://www.RNGUzi.com",
        nowPing:"RNG market",
        time:"2013年",
        dizhi:"上海市卿福路开通大厦2楼",
        nowPingMore:"、诸葛亮、青碧",
        tell:"+86 420 6231 444",
        email:"243249@qq.com",
        QQ:"5642323",
        money:"18$",
        love:"有封刀的OPen 开户手续"
    },
    {
        id:3,
        title:'SKT 1工作室',
        icon:'dls_03.png',
        img:'dls_07.png',
        guan:'关注',
        guanNum:'876882',
        map:'地区',
        mapNum:'华中',
        ping:'代理平台',
        pingNum:'SKT T1 Faker/Mi',
        www:"http://www.SKTT1.com",
        nowPing:"SKT market",
        time:"2011年",
        dizhi:"太原市学府街开通大厦",
        nowPingMore:"、国际连锁、应诺",
        tell:"+86 400 32323 123",
        email:"1222229@qq.com",
        QQ:"53333333",
        money:"28$",
        love:"游戏的只有送达大厦"
    },
    {
        id:4,
        title:'EDG个人工作室',
        icon:'dls_03.png',
        img:'dls_07.png',
        guan:'关注',
        guanNum:'1287',
        map:'地区',
        mapNum:'中部',
        ping:'代理平台',
        pingNum:'EDG clearLove/C',
        www:"http://www.edg2.com",
        nowPing:"EDG market",
        time:"2001年",
        dizhi:"长治市长子县丹朱镇",
        nowPingMore:"、卡萨丁扩、按时",
        tell:"+86 400 2222 111",
        email:"1333333@qq.com",
        QQ:"12321312",
        money:"6$",
        love:"被高大上到时看连锁"
    }
]
var dls = angular.module('dls',[]);
dls.controller('dls',function($scope){
    $scope.dls=dlsArr;
    $scope.dlsItem=dlsItem;
    $scope.get=function(e){
        $scope.nowid=e;
    }
})
dls.directive('dls',function(){
    return{
        restrict:'ECMA',
        templateUrl:'tpls/dls.html',
        replace:true
    }
})
dls.directive('dlsCon',function(){
    return{
        restrict:'ECMA',
        templateUrl:'tpls/dlscon.html',
        replace:true
    }
})
dls.directive('dlsItem',function(){
    return{
        restrict:'ECMA',
        templateUrl:'tpls/dlsItem.html',
        replace:true
    }
})
