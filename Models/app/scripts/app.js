'use strict';

/**
 * @ngdoc overview
 * @name modelsApp
 * @description
 * # modelsApp
 *
 * Main module of the application.
 */
angular
  .module('modelsApp', [
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
