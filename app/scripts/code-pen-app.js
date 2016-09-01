'use strict';

angular
  .module('demoApp', [
    'ngMaterial',
    'mkm.flickr',
  ])
  .controller('MainCtrl', ['$scope', '$http', function($scope) {

    $scope.albumID = '72157642607219393';

    $scope.flickrID = '91631856@N00';

  }]);
