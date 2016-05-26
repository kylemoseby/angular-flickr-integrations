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

      var galleryID = scope.key;

      var galleryData = new $flickr.getPhotoset(galleryID);

      galleryData.then(function(data) {

        console.log(data.data.stat);

        scope.gallery[galleryID] = data.data;

      });

      scope.gallery = scope.gallery || {

        thumbnailClick: function(img, ind) {
          console.log(img);

          console.log(ind);
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
        key: '=flickrKey'
      },
      link: link
    };
  }]);
