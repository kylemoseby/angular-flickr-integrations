'use strict';

/**
 * @ngdoc function
 * @name flickrportfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrportfolioApp
 */
angular.module('flickrportfolioApp')
  .controller('MainCtrl', ['$scope', 'restAPI', function($scope, $flickr) {

    $scope.recent = '';

    $scope.galleryID = '72157641683609583';

    var photoData = new $flickr.getRecent('91631856@N00');

    photoData.then(function(data) {

      $scope.recent = data.data;

    });

  }]);
