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
      // Define one possible url of our app
      // This app will only have one page so we will 
      // only need one state
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      // This sets the default path to direct to
      // Currently it is set to the default url of /main 
      // which is defined above.
      .otherwise({
        redirectTo: '/main'
      });
  });
