'use strict';

angular
  .module('demoApp', [
    'ngMessages',
    'ngMaterial',
    'mkm.flickr',
  ])
  .controller('flickrCtrl', ['$scope', '$http', function($scope) {

    $scope.albumID = '72157642607219393';

    $scope.flickrID = '91631856@N00';

  }]);
