'use strict';

/**
 * @ngdoc directive
 * @name flickrportfolioApp.directive:flickrPhoto
 * @description
 * # flickrPhoto
 */
angular.module('flickrportfolioApp')
  .directive('flickrPhoto', ['restAPI', function($flickr) {
    function _link(scope) {
      // console.log(scope);
      // console.log(element);
      // function _detailSetID_(id) {
      //   _detailSet_({ id: id });
      // }

      // function _prevImg_() {
      //   var prevIndex = withinIndexBounds(scope.flickr._index - 1);

      //   scope.flickr._index = prevIndex;

      //   _detailSet_(scope.flickr.photos.photo[prevIndex]);
      // }

      // function _nextImg_() {
      //   var nextIndex = withinIndexBounds(scope.flickr._index + 1);

      //   scope.flickr._index = nextIndex;

      //   _detailSet_(scope.flickr.photos.photo[nextIndex]);
      // }

      // function _imgLoaded_() {
      //   scope.flickr.imgLoading = false;
      // }

      // function withinIndexBounds(numb) {
      //   var bounds = scope.flickr.streamLength || (scope.flickr.photos.photo.length - 1);

      //   var lastPhoto = bounds;

      //   if (numb < 0) {

      //     return lastPhoto;

      //   } else if (numb > lastPhoto) {

      //     return 0;

      //   } else {

      //     return numb;
      //   }
      // }
      // console.log(scope.image);

      function _detailSet_(photo) {

        // scope.flickr.imgLoading = true;

        var photoDetails = new $flickr.getImg(photo.id);

        photoDetails.then(function(data) {
          scope.flickr.photoDetail = data.data.photo;
        });
      }

      // function _detailClose_() {
      //   scope.flickr.photoDetail = null;
      // }

      // scope.flickr = scope.flickr || {};

      // scope.flickr.imgLoading = true;
      // scope.flickr.photoDetail = null;
      scope.detailSet = _detailSet_;
      // scope.flickr.prevImg = _prevImg_;
      // scope.flickr.closeDetail = _detailClose_;
      // scope.flickr.nextImg = _nextImg_;
      // scope.flickr.imgLoaded = _imgLoaded_;

      // var flickrID = element.attr('flickr-id');

      // if (flickrID !== undefined) {
      //   // _detailSetID_(flickrID);
      // }
    }

    return {
      'link': _link,
      'scope': {
        imgage: '=photoId'
      },
      'templateUrl': 'flickr/flickr-photo.html'
    };

  }]);
