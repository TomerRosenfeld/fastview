'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/sign_in', {
        templateUrl: 'views/sign_in.html',
        controller: 'LogInCtrl'
      })
      .when('/sign_up', {
        templateUrl: 'views/sign_upAngular.html',
        controller: 'signUpCtrl'
      })
      .when('/student_card', {
        templateUrl: 'views/student_card.html',
        controller: 'StudentCardCtrl'
       })
      .when('/alphon', {
        templateUrl: 'views/alphon.html',
        controller: 'alphonCtrl'
      })
      .when('/students_cards',{
        templateUrl: 'views/students_cards.html',
        controller: 'studentsCardsCtrl'
      })
      .when('/editStudent',{
        templateUrl: 'views/editStudent.html',
        controller: 'editStudentCtrl'
      })
      .when('/addGroup',{
        templateUrl: 'views/addGroup.html',
        controller: 'addGroupCtrl'
      })
      .when('/groups',{
        templateUrl: 'views/groups.html',
        controller: 'groupsCtrl'
      })
      .when('/viewGroup',{
        templateUrl: 'views/viewGroup.html',
        controller: 'viewGroupCtrl'
      })
      .when('/addNews',{
        templateUrl: 'views/addNews.html',
        controller: 'addNewsCtrl'
      })
      .when('/about',{
        templateUrl: 'views/about.html',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
