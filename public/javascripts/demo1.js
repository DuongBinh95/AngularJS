/**
 * Created by duong on 7/28/17.
 */
// var app = angular.module('myApp' ,[])
//
// app.controller('ProductCtr', function ($scope) {
//     $scope.products = ['Apple', 'Orange','Bannana', 'Mardina' ];
// });


var app1 = angular.module('myA',[])

app1.controller('ProductCtr', function ($scope) {
    $scope.product =[
        {name : 'Apple' , price : 130},
        {name : 'Nokia' , price : 80},
        {name : 'SamSung' , price : 50},
        {name : 'OPPO' , price : 100},
    ];
});