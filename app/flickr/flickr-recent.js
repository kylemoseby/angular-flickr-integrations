'use strict';

/**
 * @ngdoc directive
 * @name flickrportfolioApp.directive:recentPhotos
 * @description
 * # recentPhotos
 */
angular.module('flickrportfolioApp')
  .directive('recentPhotos', [function() {
    function link(scope) {

      scope.detailIndex = null;
      scope.photoDetail = null;
      scope.thumbnailsShow = [];
      scope.recent = scope.recent || null;

      scope.photoCount = scope.photoCount || 0;
      scope.photoStep = scope.photoStep || 5;

      scope.thumbsize = 'lg'; // 'sm'


      scope.toggleThumbsize = function() {

        var currentSize = this.thumbsize;

        this.thumbsize = (currentSize === 'lg') ? 'sm' : 'lg';
      };

      scope.thumbnailsInit = function() {

        if (scope.recent !== null && scope.photoCount === 0) {

          return true;

        } else {

          return false;
        }
      };

      scope.thumbnailsAdd = function() {

        scope.photoCount += scope.photoStep;

        scope.thumbnailsShow = scope.recent.photos.photo.slice(0, scope.photoCount);
      };

      scope.thumbnailClick = function(img, ind) {

        scope.photoDetail = img;

        scope.detailIndex = ind;
      };

      function photoDetailSet(ind) {

        scope.photoDetail = scope.recent.photos.photo[ind];
      }

      scope.detailNext = function() {

        scope.detailIndex++;

        photoDetailSet(scope.detailIndex);
      };

      scope.detailPrev = function() {

        scope.detailIndex--;

        photoDetailSet(scope.detailIndex);
      };

      scope.detailClose = function() {

        scope.detailIndex = null;

        scope.photoDetail = null;
      };

    }

    return {
      link: link,
      templateUrl: function(element) {

        return element.attr('new-view') || 'flickr/flickr-recent.html';
      },
      restrict: 'E',
      scope: {
        recent: '=flickrId',
        count: '=count',
        step: '=step'
      }
    };
  }]);
