/**
 * Created by tomer on 5/25/2015.
 */
angular.module('testApp').
    controller('alphonCtrl',
    function ($scope,$http,$rootScope) {
        $scope.predicate = 'get("username")';
      var query = new Parse.Query(Parse.User);
        query.equalTo("admin",false);
        query.find({
            success: function (users) {
              $scope.students = users;
              $scope.$apply();
            }
        });
      $scope.sortTableBy = function(key){
        $scope.predicate = "get("+"'"+key+"')"
      }
    });
