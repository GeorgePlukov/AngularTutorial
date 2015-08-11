'use strict';

/**
 * @ngdoc overview
 * @name mouseApp
 * @description
 * # mouseApp
 *
 * Main module of the application.
 */
angular
  .module('mouseApp', [
    'ngAnimate',
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
      .otherwise({
        redirectTo: '/'
      });
  });
