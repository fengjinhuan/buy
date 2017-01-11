var headerArr={
    title:'外汇网',
    nav:[  
    {
        id:1,
        content:'比赛',
    },
    {
        id:2,
        content:'速递',
    },
    {
        id:3,
        content:'牌价',
    }
    ]
}
var header=angular.module('headnav',[]);
header.controller('headnav',function($scope){
    $scope.header=headerArr;
})
header.directive('headnav',function(){
    return {
        restrict:'ECMA',
        templateUrl:'tpls/header.html',
        replace:true
    }
})