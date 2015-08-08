'use strict';

/**
 * @ngdoc function
 * @name modelsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the modelsApp
 */
angular.module('modelsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
