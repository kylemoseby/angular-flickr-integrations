'use strict';

/**
 * @ngdoc directive
 * @name flickrportfolioApp.directive:twitterButton
 * @description
 * # twitterButton
 */
angular.module('flickrportfolioApp')
  .directive('twitterButton', function() {
    return {
      template: '',
      restrict: 'E',
      link: function postLink(scope, element) {

        console.log(scope);
        console.log(element);


      }
    };
  });
