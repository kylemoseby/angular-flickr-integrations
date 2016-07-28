'use strict';

/**
 * @ngdoc function
 * @name flickrportfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrportfolioApp
 */
angular.module('demoApp')
  .controller('MainCtrl', ['$scope', 'restAPI', function($scope) {

    $scope.galleryID = '72157641683609583';

    $scope.albumID = '72157665063123496';

    $scope.flickrID = '91631856@N00';

  }]);
