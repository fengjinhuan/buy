var callArr=[
    {
        id:1,
        url:'s9',
        guan:'关注:',
        guanNum:'18328',
        jian:'监管',
        jianNum:'783672',
        jianEnglish:'FCA',
        title:'FXCA福汇',
        x:'已认证'
    },
    {
        id:2,
        url:'s9',
        guan:'关注:',
        guanNum:'23128',
        jian:'监管',
        jianNum:'999972',
        jianEnglish:'KIS',
        title:'KIS天马',
        x:'未认证'
    },
    {
        id:3,
        url:'s9',
        guan:'关注:',
        guanNum:'11118',
        jian:'监管',
        jianNum:'298372',
        jianEnglish:'DESS',
        title:'DESS装呗',
        x:'已认证'
    },
    {
        id:4,
        url:'s9',
        guan:'关注:',
        guanNum:'23328',
        jian:'监管',
        jianNum:'1233672',
        jianEnglish:'LOK',
        title:'LOK天启',
        x:'未认证'
    },
    {
        id:5,
        url:'s9',
        guan:'关注:',
        guanNum:'228',
        jian:'监管',
        jianNum:'672',
        jianEnglish:'POS',
        title:'POS罗浮',
        x:'已认证'
    },
    {
        id:6,
        url:'s9',
        guan:'关注:',
        guanNum:'18328',
        jian:'监管',
        jianNum:'783672',
        jianEnglish:'FCA',
        title:'BOM魔力',
        x:'已认证'
    },
    {
        id:7,
        url:'s9',
        guan:'关注:',
        guanNum:'0928',
        jian:'监管',
        jianNum:'555',
        jianEnglish:'FCA',
        title:'OPS纱窗',
        x:'已认证'
    },
    {
        id:8,
        url:'s9',
        guan:'关注:',
        guanNum:'444',
        jian:'监管',
        jianNum:'666',
        jianEnglish:'MOS',
        title:'MOS莫斯',
        x:'已认证'
    },
    {
        id:9,
        url:'s9',
        guan:'关注:',
        guanNum:'232',
        jian:'监管',
        jianNum:'123',
        jianEnglish:'DOWN',
        title:'DOWN杜昂',
        x:'已认证'
    }
]
var call = angular.module('call',[]);
call.controller('call',function($scope){
    $scope.call=callArr;
})
call.directive('call',function(){
    return{
        restrict:'ECMA',
        templateUrl:'tpls/call.html',
        replace:true,
        scope:{
            callarr:'=key'
        }
    }
})