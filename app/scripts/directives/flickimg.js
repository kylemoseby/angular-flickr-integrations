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
      templateUrl: 'flickr/flickr-img.html',
      restrict: 'E',
      link: function(scope) {

        function imgSetWidth() {
          // MAKES TESTING HARD TO USE WINDOW FIX LATER
          var wdth = window.innerWidth;

          if (wdth > 1600) {

            scope.size = 'h';

          } else if (800 > wdth > 1024) {

            scope.size = 'b';

          } else if (320 > wdth > 800) {

            scope.size = 'c';

          } else if (wdth > 320) {

            scope.size = 'n';
          }
        }

        imgSetWidth();

        window.onresize = function() {

          imgSetWidth();

          scope.$digest();
        };
      },
      scope: {
        img: '=info'
      }
    };
  });
