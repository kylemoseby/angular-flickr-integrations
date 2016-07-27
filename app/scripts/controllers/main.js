'use strict';

/**
 * @ngdoc function
 * @name flickrportfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrportfolioApp
 */
angular.module('demoApp')
  .controller('MainCtrl', ['$scope', 'restAPI', function($scope, $flickr) {

    $scope.galleryID = '72157641683609583';
    $scope.albumID = '72157665063123496';
    $scope.galleryID = '72157644232261237';

    var photoData = new $flickr.getRecent('91631856@N00');

    photoData.then(function(data) {
      $scope.recent = data.data;
    });

  }]);
