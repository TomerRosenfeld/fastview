'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('StudentCardCtrl', function ($scope , $location,$rootScope,$window) {
    $scope.getFromStorage= function (key){
      return Parse.User.current().get(key)
    };
    $scope.cd = function (dir){
      $location.url(dir);
    }
    });

