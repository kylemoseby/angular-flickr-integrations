'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', ['$scope', function($scope) {

    $scope.albumID = '72157642607219393';

    $scope.flickrID = '91631856@N00';

  }]);
