'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .service('sharedProperties', function () {
        var mail;

        return {
            getProperty: function () {
                return mail;
            },
            setProperty: function (value) {
                mail = value;
            }
        };
    });
angular.module('testApp') .controller('LogInCtrl',
        function ($scope , $location, sharedProperties , $rootScope, $window) {
          var currentUser = Parse.User.current();
          if (currentUser!=null) {
            $location.url("main");
          }
        //  var _0x5a81=["\x6A\x5A\x61\x6E\x42\x37\x55\x69\x79\x73\x69\x63\x68\x4F\x66\x6C\x30\x77\x32\x42\x41\x31\x30\x4A\x6D\x32\x51\x36\x57\x44\x75\x56\x65\x57\x69\x30\x43\x51\x73\x4F","\x48\x70\x37\x6B\x6C\x6E\x54\x52\x31\x67\x76\x75\x67\x39\x62\x4D\x43\x6D\x39\x44\x75\x72\x59\x70\x51\x54\x70\x58\x33\x31\x30\x44\x4D\x72\x58\x4F\x33\x64\x4E\x43","\x69\x6E\x69\x74\x69\x61\x6C\x69\x7A\x65"];Parse[_0x5a81[2]](_0x5a81[0],_0x5a81[1]);
          $scope.login = function () {
            Parse.User.logIn($scope.name, $scope.password, {
              success: function (user) {
                var currentUser = Parse.User.current();  // this will now be null
                $scope.handleSuccessLogin(currentUser);
              },
              error: function (user, error) {
                alert("An error has occurred: " + error.message);
              }
            });
          };
    $scope.handleSuccessLogin = function(currentUser){
      try {
     /*     $window.sessionStorage.email = currentUser.get("email");
          $window.sessionStorage.username = currentUser.get("username");
          $window.sessionStorage.name = currentUser.get("name");
          $window.sessionStorage.email = currentUser.get("email");
          $window.sessionStorage.gender = currentUser.get("gender");
          $window.sessionStorage.phone = currentUser.get("phone");
          $window.sessionStorage.school = currentUser.get("school");
          $window.sessionStorage.parent_name = currentUser.get("parent_name");
          $window.sessionStorage.parent_phone = currentUser.get("parent_phone");
          $window.sessionStorage.user_admin = currentUser.get("admin");
          $window.sessionStorage.profile_pic = currentUser.get("pic").url();
          $window.sessionStorage.birthday = currentUser.get("birthday").toLocaleDateString();*/
          $rootScope.logedIn = true;
          $location.path("#/");
      }
      catch (e){
        alert(e)
      }

    };
  }
).
    factory('notify', ['$window', function(win) {
        var msgs = [];
        return function(msg) {
            msgs.push(msg);
            if (msgs.length == 3) {
                win.alert(msgs.join("\n"));
                msgs = [];
            }
        };
    }]);


