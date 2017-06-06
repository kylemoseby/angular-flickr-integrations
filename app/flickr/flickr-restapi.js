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
    'API',
    'ngMaterial'
  ])
  .config(['$qProvider', function($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
  }])
  .config(['$sceDelegateProvider', function($sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://api.flickr.com/services/rest/**'
    ]);
  }])
  .service('restAPI', ['$http', '$api', function($http, $api) {

    var apiKey = $api.flickr;

    var trustedURL = 'https://api.flickr.com/services/rest/';

    function _getPhotoset(setid) {

      return $http({
        method: 'GET',
        url: trustedURL,
        params: {
          'nojsoncallback': 1,
          'method': 'flickr.photosets.getPhotos',
          'api_key': apiKey,
          'photoset_id': setid,
          'extras': 'description',
          'format': 'json'
        }
      });
    }

    function _getRecent(userid) {

      return $http({
        method: 'GET',
        url: trustedURL,
        params: {
          'nojsoncallback': 1,
          'method': 'flickr.people.getPhotos',
          'user_id': userid,
          'api_key': apiKey,
          'extras': 'o_dims,description',
          'format': 'json',
          'per_page': 500
        }
      });
    }

    function _getImg(imgid) {

      return $http({
        method: 'GET',
        url: trustedURL,
        params: {
          'nojsoncallback': 1,
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
