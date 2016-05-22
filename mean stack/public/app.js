angular.module("myApp",["ngRoute"])


   .config(function($routeProvider){
         $routeProvider

             .when("/",{
                   templateUrl:"views/input.html",
                   controller:"appCtrl"
             })
   })
   .service("myService",function($http){
         this.sendData=function(itemData){
               return $http({
                       method:"post",
                        url:"/findCount",
                        data:itemData

               });
         }
   })
  .controller("appCtrl",function($scope,myService){
       $scope.item={};
           $scope.getCount=function(){
               myService.sendData($scope.item).then(function(response){
                  $scope.result=response.data;
               });
           }
  });
