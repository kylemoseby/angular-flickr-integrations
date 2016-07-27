'use strict';

/**
 * @ngdoc service
 * @name flickrportfolioApp.restAPI
 * @description
 * # restAPI
 * Service in the flickrportfolioApp.
 */
angular.module('flickrportfolioApp.rest')
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
