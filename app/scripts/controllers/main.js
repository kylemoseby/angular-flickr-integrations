'use strict';

/**
 * @ngdoc function
 * @name flickrportfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrportfolioApp
 */
angular.module('flickrportfolioApp')
  .controller('MainCtrl', ['$scope', function($scope) {

    $scope.$recent = '';

    $scope.$galleryID = '72157641683609583';

  }]);
