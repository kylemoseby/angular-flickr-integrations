'use strict';

/**
 * @ngdoc directive
 * @name flickrportfolioApp.directive:flickrGallery
 * @description
 * # flickrGallery
 */
angular.module('flickrportfolioApp')
  .directive('flickrAlbum', ['restAPI', function($flickr) {

    function link(scope) {

      var galleryID = scope.albumId;

      var galleryData = new $flickr.getPhotoset(galleryID);

      galleryData.then(function(data) {

        scope.gallery = data.data;

      });

      scope.photoDetail = null;
      scope.photoDetailIndx = null;

      function photoDetailSet(ind) {

        var newDetail = scope.gallery.photoset.photo[ind];

        scope.photoDetail = newDetail;

        // if (newDetail.hasOwnProperty('id')) {

        // Call Flickr for image info
        var imgInfo = $flickr.getImg(newDetail.id);

        imgInfo.then(function(data) {

          scope.detailInfo = data.data.photo;
        });
        // }
      }

      /*
        ALBUM NAVIGATION
      */
      scope.thumbClick = function(ind) {

        scope.photoDetailIndx = ind;

        photoDetailSet(ind);
      };

      scope.detailClose = function() {

        scope.photoDetail = null;

        scope.photoDetailIndx = null;
      };

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
      templateUrl: function(element) {

        return element.attr('new-view') || 'flickr/flickr-album.html';
      },
      scope: {
        albumId: '=albumId'
      },
      link: link
    };

  }]);
