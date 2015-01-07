'use strict';

/* Controllers */

angular.module('johnson.controllers', [])
.controller('MainCtrl', function ($scope, $http) {
  $scope.search = function(query) {
    var search = {
      'url': query
    };

    $http.get('/api/start', search).success(function (data, status, headers, config) {
      console.log(data, status, headers, config);
    })
  }

})
