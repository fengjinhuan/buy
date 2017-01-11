var mainArr = 
[
        [
            {
                title:'监管机构'
            },
            {
                title:'点差类型'
            },
            {
                title:'交易平台'
            },
            {
                title:'最小头寸'
            },
            {
                title:'最大杠杆'
            },
            {
                title:'最低入金'
            },
            {
                title:'入金方式'
            }
        ],
        [  
            {
                id:1,
                title:'ASIC'
            },
            {
                id:2,
                title:'CYSEC'
            },
            {
                id:3,
                title:'FINM'
            },
            {
                id:4,
                title:'FMA'
            } 
        ],
        [  
            {
                id:1,
                title:'浮动点差'
            },
            {
                id:2,
                title:'固定点差'
            },
            {
                id:3,
                title:'较小点差'
            }
        ],
        [  
            {
                id:1,
                title:'0.01手'
            },
            {
                id:2,
                title:'0.25手'
            },
            {
                id:3,
                title:'0.1手'
            },
            {
                id:4,
                title:'1手'
            } 
        ],
        [  
            {
                id:1,
                title:'浮动点差'
            },
            {
                id:2,
                title:'固定点差'
            },
            {
                id:3,
                title:'较小点差'
            }
        ],
        [  
            {
                id:1,
                title:'50'
            },
            {
                id:2,
                title:'100'
            },
            {
                id:3,
                title:'200'
            },
            {
                id:4,
                title:'300'
            },
            {
                id:5,
                title:'400'
            } 
        ],
        [  
            {
                id:1,
                title:'1'
            },
            {
                id:2,
                title:'50'
            },
            {
                id:3,
                title:'100'
            },
            {
                id:4,
                title:'200'
            },
            {
                id:5,
                title:'300'
            } 
        ],
        [  
            {
                id:1,
                title:'信用卡'
            },
            {
                id:2,
                title:'电汇'
            },
            {
                id:3,
                title:'银联'
            },
            {
                id:4,
                title:'money'
            } 
        ]  
]
var main = angular.module('main',[]);
main.controller('main',function($scope){
    $scope.main=mainArr;
})
main.directive('main',function(){
    return{
        restrict:'ECMA',
        templateUrl:'pages/main/index.html',
        replace:true
    }
})