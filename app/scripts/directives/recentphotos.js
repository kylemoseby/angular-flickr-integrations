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

      scope.index = null;
      scope.photoDetail = {};

      scope.photoCount = scope.photoCount || 10;
      scope.photoStep = scope.photoStep || 5;
      scope.thumbsize = 'lg'; // 'sm'

      scope.toggleThumbsize = function() {

        var currentSize = this.thumbsize;

        this.thumbsize = (currentSize === 'lg') ? 'sm' : 'lg';

        // NOT IDEAL
        // https://github.com/passy/angular-masonry/issues/71

        this.$root.$broadcast('masonry.reload');

      };

      scope.thumbnailsAdd = function() {
        this.photoCount = this.photoCount + this.photoStep;

      };

      scope.thumbnailClick = function(img, ind) {
        scope.photoDetail = img;
        scope.index = ind;
      };

    }

    return {
      link: link,
      templateUrl: 'flickr/flickr-recent.html',
      restrict: 'E',
      scope: {
        recent: '=flickrId',
        count: '=count',
        step: '=step'
      }
    };

  }]);
