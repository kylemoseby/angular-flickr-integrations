// (function() {
'use strict';

/**
 * @ngdoc service
 * @name mkm.flickr.restAPI
 * @description
 * # restAPI
 * Service in the mkm.flickr.
 */
angular.module('mkm.flickr', [
    'ngRoute',
    'API',
    'wu.masonry'
  ])
  .service('restAPI', ['$http', '$api', function($http, $api) {

    var apiKey = $api.flickr;

    function _getPhotoset(setid) {

      return $http
        .jsonp('https://api.flickr.com/services/rest/', {
          cache: false,
          params: {
            'jsoncallback': 'JSON_CALLBACK',
            'method': 'flickr.photosets.getPhotos',
            'api_key': apiKey,
            'photoset_id': setid,
            'extras': 'description',
            'format': 'json'
          }
        });
    }

    function _getRecent(userid) {

      return $http
        .jsonp('https://api.flickr.com/services/rest/', {
          cache: false,
          params: {
            'jsoncallback': 'JSON_CALLBACK',
            'method': 'flickr.people.getPhotos',
            'user_id': userid,
            'api_key': apiKey,
            'extras': 'description',
            'format': 'json',
            'per_page': 500
          }
        });
    }

    function _getImg(imgid) {

      return $http
        .jsonp('https://api.flickr.com/services/rest/', {
          cache: false,
          params: {
            'jsoncallback': 'JSON_CALLBACK',
            'method': 'flickr.photos.getInfo',
            'api_key': apiKey,
            'photo_id': imgid,
            'format': 'json'
          }
        });
    }

    return {
      getPhotoset: _getPhotoset,
      getRecent: _getRecent,
      getImg: _getImg
    };

  }]);
// }());

'use strict';

/**
 * @ngdoc directive
 * @name mkm.flickr.directive:flickrGallery
 * @description
 * # flickrGallery
 */
angular.module('mkm.flickr')
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

'use strict';

/**
 * @ngdoc directive
 * @name mkm.flickr.directive:flickImg
 * @description
 * # flickImg
 */
angular.module('mkm.flickr')
  .directive('flickrImg', ['restAPI', function(restAPI) {
    return {
      templateUrl: function(element) {

        return element.attr('new-view') || 'flickr/flickr-img.html';
      },
      restrict: 'E',
      link: function(scope) {

        function imgSetWidth() {
          // MAKES TESTING HARD TO USE WINDOW FIX LATER
          // var wdth = element.innerWidth();
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
  }]);

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

      scope.count = scope.countInit - scope.photoStep || 0;

      var photoData = new $flickr.getRecent(scope.flickrID);

      photoData.then(function(data) {

        scope.recent = data.data.photos.photo;

        scope.thumbnailsAdd();
      });


      scope.thumbnailsAdd = function() {

        scope.count += scope.photoStep;

        scope.thumbnailsShow = scope.recent.slice(0, scope.count);
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
