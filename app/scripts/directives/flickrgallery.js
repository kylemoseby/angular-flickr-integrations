'use strict';

/**
 * @ngdoc directive
 * @name flickrportfolioApp.directive:flickrGallery
 * @description
 * # flickrGallery
 */
angular.module('flickrportfolioApp')
  .directive('flickrGallery', ['restAPI', function($flickr) {

    function link(scope) {

      var galleryID = scope.flickrKey;

      var galleryData = new $flickr.getPhotoset(galleryID);

      galleryData.then(function(data) {

        scope.gallery = data.data;

      });

      scope.photoDetail = null;
      scope.photoDetailIndx = null;


      scope.thumbClick = function(img, ind) {

        scope.photoDetail = img;

        scope.photoDetailIndx = ind;

      };

      scope.detailClose = function() {
        console.log('close');
        scope.photoDetail = null;

        scope.photoDetailIndx = null;

      };

      function photoDetailSet(ind) {

        scope.photoDetail = scope.gallery.photoset.photo[ind];

      }

      scope.detailPrev = function() {

        scope.photoDetailIndx--;

        photoDetailSet(scope.photoDetailIndx);
      };

      scope.detailNext = function() {

        scope.photoDetailIndx++;

        photoDetailSet(scope.photoDetailIndx);
      };

    }

    return {
      'templateUrl': 'flickr/flickr-gallery.html',
      scope: {
        flickrKey: '=flickrKey'
      },
      link: link
    };

  }]);
