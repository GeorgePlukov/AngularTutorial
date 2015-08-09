'use strict';

/**
 * @ngdoc function
 * @name modelsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modelsApp
 */
angular.module('modelsApp')
  .controller('MainCtrl', function ($scope) {
  	console.log('Main Controller');

  	$scope.data = 'Our data';

  });
