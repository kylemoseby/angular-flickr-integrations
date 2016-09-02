'use strict';

angular
  .module('demoApp', [
    'ngMessages',
    'ngMaterial',
    'mkm.flickr',
  ])
  .controller('MainCtrl', ['$scope', '$http', function($scope) {
    
    console.log('codepen controller');
    
    $scope.albumID = '72157642607219393';

    $scope.flickrID = '91631856@N00';

  }]);
