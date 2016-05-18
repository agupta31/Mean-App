angular.module("myApp",[]).

 service("myService",function($http){

       this.getCountObj=function(countData){
         console.log(countData);
             return $http({
                  method:"post",
                  url:"/count",
                  data:countData
             })
       }
 })

.controller("appCtrl",function($scope,myService){

     $scope.urlName={};

      $scope.getCount=function(){
         myService.getCountObj($scope.urlName).success(function(response){
              $scope.item=response;
         })

      }
});
