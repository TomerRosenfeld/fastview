'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('studentsCardsCtrl', function ($scope , $location,$rootScope,$window) {
    var _0x5a81=["\x6A\x5A\x61\x6E\x42\x37\x55\x69\x79\x73\x69\x63\x68\x4F\x66\x6C\x30\x77\x32\x42\x41\x31\x30\x4A\x6D\x32\x51\x36\x57\x44\x75\x56\x65\x57\x69\x30\x43\x51\x73\x4F","\x48\x70\x37\x6B\x6C\x6E\x54\x52\x31\x67\x76\x75\x67\x39\x62\x4D\x43\x6D\x39\x44\x75\x72\x59\x70\x51\x54\x70\x58\x33\x31\x30\x44\x4D\x72\x58\x4F\x33\x64\x4E\x43","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65"];Parse[_0x5a81[2]](_0x5a81[0],_0x5a81[1]);
    var query = new Parse.Query(Parse.User);
    query.equalTo("admin", false);  // find all the women
    query.find({
      success: function(notAdmins) {
        $scope.Students = notAdmins;
        $scope.$apply();
      }
    });
    $scope.editStudent = function(index){
      //$rootScope.studentToEdit = $scope.Students[index];
      $rootScope.studentToEdit = $scope.Students[index];
      $location.url("/editStudent");
      $rootScope.$apply();
    }
  });
angular.module('testApp')
  .controller('editStudentCtrl',function($scope,$location,$rootScope){
    $scope.student = $rootScope.studentToEdit;
    $scope.$apply();
    if($scope.student==null||$scope.student == undefined){
      $location.url("/");
    }
    $scope.Get = function(key){
      return $scope.student.get(key);
    };
    $scope.name = $scope.Get("name");
    $scope.username = $scope.Get("username");
    $scope.email = $scope.Get("email");
    $scope.phone = $scope.Get("phone");
    $scope.school = $scope.Get("school");
    $scope.parent_name = $scope.Get("parent_name");
    $scope.parent_phone = $scope.Get("parent_phone");
    $scope.myPass = Parse.User.current().get("password");
    $scope.myId = Parse.User.current().get("username");
    $scope.Confirm = function () {
      try {
       /* Parse.User.logOut();
        Parse.User.logIn($scope.student.get("username"),$scope.student.get("password"), {
          success: function(user) {
            user.set("name", $scope.name);
            user.set("username", $scope.username);
            user.set("email", $scope.email);
            user.set("phone", $scope.phone);
            user.set("school", $scope.school);
            user.set("parent_name", $scope.parent_name);
            user.set("parent_phone", $scope.parent_phone);
            user.save();
           // Parse.User.logOut();
            Parse.User.logIn($scope.myId, $scope.myPass, {
              success: function(user) {
                alert("success!!")
              },
              error: function(user, error) {
                alert(error.message)
              }
            });
          },
          error: function(user, error) {
            alert(error.message)
          }
        });
*/
        alert("This feature is not yet available")
      }
      catch(e){alert(e)}

    }
  });
