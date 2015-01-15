'use strict';

/* Controllers */

angular.module('johnson.controllers', [])
.controller('MainCtrl', function ($scope, $http) {
  Waves.displayEffect();

  $scope.query = "http://"

  $scope.search = function(query) {
    var search = {
      'url': query
    };

    $http.post('/api/geturl', search).then(function(response) {
      $scope.html = response.data.html;
    })
  }

})
