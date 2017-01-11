app.config(['$routeProvider',function($l){
    $l.when('/',{
        templateUrl:'pages/index/index.html'
    }).when('/dls',{
        templateUrl:'pages/dls/index.html'
    })
}])