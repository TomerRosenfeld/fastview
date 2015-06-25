/**
 * Created by tomer on 6/6/2015.
 */
angular.module('testApp')
  .controller('addGroupCtrl', function ($scope , $location,$rootScope) {
    $scope.name = "";
    $scope.major = "";
    $scope.grade = "";
    $scope.day = "";
    $scope.hour = "";
    $scope.teacher = "";
    $scope.addGroup = function(){
      var Group = Parse.Object.extend("Groups");
      var group = new Group();
      if($scope.Verify($scope.name)&&
         $scope.Verify($scope.major)&&
         $scope.Verify($scope.grade)&&
         $scope.Verify($scope.day)&&
         $scope.Verify($scope.hour)&&
         $scope.Verify($scope.teacher)&&
         $scope.Verify($scope.name)) {
        group.set("name", $scope.name);
        group.set("major", $scope.major);
        group.set("grade", $scope.grade);
        group.set("day", $scope.day);
        group.set("time", $scope.hour);
        group.set("teacher", $scope.teacher);
        group.save(null, {
          success: function(gameScore) {
            // Execute any logic that should take place after the object is saved.
            $location.path("#/")
          },
          error: function(gameScore, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Error: ' + error.message);
          }
        });
      }
      else{
          alert("אנא מלא את כל הפרטים")
      }
    };
    /**
     * @return {boolean}
     */
    $scope.Verify = function(key){
      console.log(key!="")
      return key != "";
    }

  });
angular.module('testApp')
  .controller('groupsCtrl', function ($scope , $location,$rootScope,$window) {
    var Groups = Parse.Object.extend("Groups");
    var queryObject = new Parse.Query(Groups);
    queryObject.find({
      success: function (result) {
        $scope.groups = result;
      },
      error: function (error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  });
angular.module('testApp')
  .controller('groupsCtrl', function ($scope , $location,$rootScope,$window) {
    var Groups = Parse.Object.extend("Groups");
    var queryObject = new Parse.Query(Groups);
    queryObject.find({
      success: function (result) {
        $scope.groups = result;
      },
      error: function (error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
    $scope.viewGroup = function(index){
      $rootScope.groupToView = $scope.groups[index];
      $location.url("/viewGroup");
      $scope.$apply();
    };
  });
angular.module('testApp').
  controller('viewGroupCtrl',
  function ($scope,$http,$rootScope,$location) {
    $scope.days = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"]
    if($rootScope.groupToView==undefined){
      $location.url("/#");
    }
    else {
      var query = new Parse.Query(Parse.User);
      query.equalTo("group", $rootScope.groupToView.get("name"));
      query.find({
        success: function (users) {
          $scope.students = users;
          $scope.$apply();
        }
      });
      $scope.sortTableBy = function (key) {
        $scope.predicate = "get(" + "'" + key + "')"
      }
    }
  });

