'use strict';

/* Controllers */

angular.module('johnson.controllers', [])
.controller('MainCtrl', function ($scope, $http) {
  $scope.search = function(query) {
    var search = {
      'url': 'http://' + query
    };

    $http.post('/api/geturl', search).then(function(response) {
      $scope.html = response.data.html;
    })
  }

})
