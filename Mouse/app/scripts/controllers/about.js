'use strict';

/**
 * @ngdoc function
 * @name mouseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mouseApp
 */
angular.module('mouseApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
