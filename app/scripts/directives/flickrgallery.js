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

        scope.gallery[galleryID] = data.data;

      });

      scope.gallery = scope.gallery || {

        thumbnailClick: function() {
          // try {
          // if (typeof scope.gallery.detailSet === 'function') {
          // scope.gallery.detailSet(img);
          // }
          // } catch (e) {}
        },

        // toggleThumbsize: function() {

        //   var currentSize = this.thumbsize;

        //   this.thumbsize = (currentSize === 'lg') ? 'sm' : 'lg';

        //   // NOT IDEAL
        //   // https: //github.com/passy/angular-masonry/issues/71

        //   scope.$root.$broadcast('masonry.reload');
        // }
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
