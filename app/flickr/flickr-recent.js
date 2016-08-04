'use strict';

/**
 * @ngdoc directive
 * @name mkm.flickr.directive:recentPhotos
 * @description
 * # recentPhotos
 */
angular.module('mkm.flickr')
  .directive('recentPhotos', ['restAPI', function($flickr) {

    function link(scope) {

      scope.detailIndex = null;
      scope.photoDetail = null;
      scope.thumbnailsShow = [];

      scope.recent = [];

      scope.photoStep = scope.photoStep || 5;
      scope.photoCount = scope.countInit - scope.photoStep || 0;


      var photoData = new $flickr.getRecent(scope.flickrID);

      photoData.then(function(data) {

        scope.recent = data.data.photos.photo;

        scope.thumbnailsAdd();
      });

      scope.thumbnailsAdd = function() {

        scope.photoCount += scope.photoStep;

        scope.thumbnailsShow = scope.recent.slice(0, scope.photoCount);
      };

      scope.thumbnailClick = function(img, ind) {

        scope.photoDetail = img;

        scope.detailIndex = ind;

      };

      function photoDetailSet(ind) {

        scope.photoDetail = scope.recent[ind];

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
        flickrID: '=flickrId',
        countInit: '=count',
        step: '=step'
      }
    };
  }]);
