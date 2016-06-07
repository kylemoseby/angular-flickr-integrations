'use strict';

/**
 * @ngdoc directive
 * @name flickrportfolioApp.directive:flickImg
 * @description
 * # flickImg
 */
angular.module('flickrportfolioApp')
  .directive('flickrImg', function() {
    return {
      // template: '<img src="https://farm{{farm-id}}.staticflickr.com/{{server-id}}/{{id}}_{{secret}}_b.jpg">',
      template: '{{img}}',
      restrict: 'E',
      link: function(scope) {
        console.log(scope);
      },
      scope: {
        img: '=info'
      }
    };
  });
