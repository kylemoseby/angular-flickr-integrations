'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('MainCtrl', ['$scope', '$http', function($scope) {

    $scope.albumID = '72157642607219393';

    $scope.flickrID = '91631856@N00';

    var _root_ = 'https://kylemoseby.github.io/angular-flickr-integrations/';

    $scope.codepen = {
      'title': 'Flickr Album',
      'description': 'A Flickr API integration written in Angular',
      'tags': ['flickr', 'angular'],
      'layout': 'left',
      'html': _root_ + 'app/views/flickr-album-codepen.html',
      'css': _root_ + 'style/flickr-albums.less',
      'css_pre_processor': 'less',
      'js': _root_ + 'app/flickr/flickr-album.js',
      'head': '<meta name=\"viewport\" content=\"width=device-width\">',
      'css_external': [
        _root_ + 'styles/vendor.3443a61b.css',
        _root_ + 'styles/main.d7b3dfe1.css'
      ],
      'js_external': [
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-route.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-114/svg-assets-cache.js',
        'https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.0/angular-material.js',
        _root_ + 'app/flickr/flickr-restapi.js',
        _root_ + 'app/flickr/flickr-restapi.js',
        // _root_ + 'app/scripts/code-pen-app.js',
        'https://dl.dropboxusercontent.com/u/227926/MiscWeb/api_key.js'
      ]
    };
  }]);
