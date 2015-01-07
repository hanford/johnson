'use strict';

angular.module('johnson', [
  'johnson.controllers',
  'johnson.services',
  'johnson.directives',
  'ui.router'
])
// .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
//   // $stateProvider
//   //   .state('view1', {
//   //     url: "/view1",
//   //     controller: 'MainCtrl',
//   //     templateUrl: "partials/partial1.html"
//   //   })

//     $urlRouterProvider.otherwise("/");
//     $locationProvider.html5Mode(true);

// });
