var hotArr = [
    {
        id:1, 
        title:'监管机构',
        url:'jgjg'
    },
    {
        id:2,
        title:'交易商新闻',
        url:'jysxw'
    },
    {
        id:3,
        title:'交易商活动',
        url:'jyshd'
    },
    {
        id:4,
        title:'政策法规',
        url:'zcfg'
    },
    {
        id:5,
        title:'虚假交易商',
        url:'xjjys'
    },
    {
        id:6,
        title:'代理商',
        url:'dls'
    },
    {
        id:7,
        title:'交易商排名',
        url:'jyspm'
    }
]
var hot = angular.module('hot',[]);
hot.controller('hot',function($scope){
    $scope.hot=hotArr
})
hot.directive('hot',function(){
    return{
        restict:'ECMA',
        templateUrl:'tpls/hot.html',
        replace:true
    }
})