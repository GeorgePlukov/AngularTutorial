'use strict';

/**
 * @ngdoc function
 * @name mouseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mouseApp
 */
angular.module('mouseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
