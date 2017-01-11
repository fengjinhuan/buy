var footArr = [
    ['移动版','PC版'],
    {
        qq:'客服QQ',
        call:'56987564',
        cn:'OEF.CN'
    }
]
var  foot = angular.module('foot',[]);
foot.controller('foot',function($scope){
    $scope.foot = footArr;
})
foot.directive('foot',function(){
    return {
        restrict:'ECMA',
        templateUrl:'tpls/foot.html',
        replace:true
    }
})