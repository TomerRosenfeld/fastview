/**
 * Created by tomer on 6/5/2015.
 */
angular.module('testApp').
  controller('MainCtrl',
  function ($scope,$http,$rootScope,$location) {
  /*  var _0x5a81=["\x6A\x5A\x61\x6E\x42\x37\x55\x69\x79\x73\x69\x63\x68\x4F\x66\x6C\x30\x77\x32\x42\x41\x31\x30\x4A\x6D\x32\x51\x36\x57\x44\x75\x56\x65\x57\x69\x30\x43\x51\x73\x4F","\x48\x70\x37\x6B\x6C\x6E\x54\x52\x31\x67\x76\x75\x67\x39\x62\x4D\x43\x6D\x39\x44\x75\x72\x59\x70\x51\x54\x70\x58\x33\x31\x30\x44\x4D\x72\x58\x4F\x33\x64\x4E\x43","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65"];Parse[_0x5a81[2]](_0x5a81[0],_0x5a81[1]);
    var currentUser = Parse.User.current();
    if (currentUser!=null) {
        $location.path("/student_card");
    }
    else{
        $location.path("/sign_in");
    }*/
    var GameScore = Parse.Object.extend("News");
    var query = new Parse.Query(GameScore);
    query.find({
      success: function(result) {
        $scope.news = result.reverse();
      },
      error: function(error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });


    $scope.viewStudentGroup = function(){
      var groupToView = $rootScope.user.get("group");

      var GameScore = Parse.Object.extend("Groups");
      var query = new Parse.Query(GameScore);
      query.equalTo("name",groupToView);
      query.find({
        success: function(result) {
         $rootScope.groupToView = result[0];
          $location.url("/viewGroup");
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    }
  });
