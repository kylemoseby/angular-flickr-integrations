angular.module('mkm.flickr').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('flickr/flickr-album.html',
    "<!-- ERROR START --> <br> <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"gallery.stat === 'fail'\"> <b>An error occurred</b> <br> Code: {{gallery.code}} / Message: {{gallery.message}} </div> <!-- ERROR END --> <!-- THUMBNAILS START --> <md-grid-list md-cols=\"2\" md-cols-gt-xs=\"5\" md-cols-gt-lg=\"7\" md-row-height=\"1:1\" md-gutter=\"10px\"> <!-- <md-grid-list md-cols=\"2\" md-cols-gt-xs=\"5\" md-cols-gt-lg=\"7\"  md-row-height=\"1:1\"> --> <md-grid-tile ng-repeat=\"img in gallery.photoset.photo\" class=\"gallery-thumbs\"> <img ng-src=\"https://farm{{img.farm-id}}.staticflickr.com/{{img.server-id}}/{{img.id}}_{{img.secret}}_q.jpg\" ng-click=\"thumbClick($event, img, $index)\"> </md-grid-tile> </md-grid-list> <!-- THUMBNAILS END -->"
  );


  $templateCache.put('flickr/flickr-img.html',
    "<img ng-src=\"https://farm{{img.farm-id}}.staticflickr.com/{{img.server-id}}/{{img.id}}_{{img.secret}}_{{size}}.jpg\">"
  );


  $templateCache.put('flickr/flickr-photo-detail.html',
    "<!-- PHOTODETAIL START --> <div class=\"flickr-detail-photo\"> <flickr-img info=\"photoDetail\"></flickr-img> <div class=\"recent-detail-descrip\"> {{photoDetail.title}} {{photoDetail.description._content}} </div> <nav> <ul class=\"pager\"> <li ng-show=\"detailIndex > 0\"> <a ng-click=\"detailPrev()\"> <span class=\"glyphicon glyphicon-chevron-left\"></span> </a> </li> <li> <a ng-click=\"detailClose()\"> <span class=\"glyphicon glyphicon-remove\"></span> </a> </li> <li ng-show=\"detailIndex < photos.length - 1\"> <a ng-click=\"detailNext()\"> <span class=\"glyphicon glyphicon-chevron-right\"></span> </a> </li> </ul> </nav> </div> <!-- PHOTODETAIL END -->"
  );


  $templateCache.put('flickr/flickr-recent.html',
    "<!-- ERROR START --> <br> <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"recent.stat == 'fail'\"> <b>An error occurred</b> <br> Code: {{recent.code}} / Message: {{recent.message}} </div> <!-- ERROR END --> <!-- THUMBNAILS START --> <md-grid-list md-cols=\"2\" md-cols-gt-xs=\"5\" md-cols-gt-lg=\"7\" md-row-height=\"1:1\" md-gutter=\"10px\"> <md-grid-tile class=\"recent-photos\" ng-repeat=\"img in thumbnailsShow\"> <img ng-src=\"https://farm{{img.farm-id}}.staticflickr.com/{{img.server-id}}/{{img.id}}_{{img.secret}}_q.jpg\" ng-click=\"thumbnailClick($event, img, $index)\"> </md-grid-tile> </md-grid-list> <!-- THUMBNAILS END --> <!-- NAV START --> <nav> <ul class=\"pager\" ng-hide=\"recent.photos.photo.length === 0\"> <li> <a ng-click=\"thumbnailsAdd()\"> <span class=\"glyphicon glyphicon-plus\"></span> </a> </li> </ul> </nav> <!-- NAV END -->"
  );


  $templateCache.put('views/about.html',
    "<p>This is the about view.</p>"
  );


  $templateCache.put('views/flickr-album-codepen.html',
    "<div ng-app=\"demoApp\" ng-controller=\"flickrCtrl\"> <flickr-album album-id=\"albumID\"></flickr-album> </div>"
  );


  $templateCache.put('views/flickr-recent-codepen.html',
    "<div ng-app=\"demoApp\" ng-controller=\"flickrCtrl\"> <recent-photos flickr-id=\"flickrID \" count=\"20 \"></recent-photos> </div>"
  );


  $templateCache.put('views/flickr-rencent-codepen.html',
    "flickr recent code pen <flickr-album album-id=\"72157642607219393\"></flickr-album>"
  );


  $templateCache.put('views/main.html',
    "<md-content class=\"main-page\" layout=\"row\" layout-padding layout-wrap class=\"main-page\"> <!-- TITLE --> <div flex=\"100\" flex-md=\"80\" flex-offset-md=\"10\" flex-gt-md=\"15\"> <h1>Angularjs Integrations for Flickr</h1> <ul class=\"list-inline\"> <li> <a href=\"https://github.com/kylemoseby/angular-flickr-integrations\" target=\"_blank\"><span class=\"icon-github\"></span></a> </li> <li> <a rel=\"license\" href=\"http://creativecommons.org/licenses/by/4.0/\" class=\"creative-commons\"><img alt=\"Creative Commons License\" src=\"https://i.creativecommons.org/l/by/4.0/80x15.png\"></a> </li> </ul> </div> <!-- / TITLE --> <!-- ALBUM --> <div flex=\"100\" flex-order-gt-md=\"4\" flex-md=\"80\" flex-offset-md=\"10\" flex-gt-md=\"50\"> <h2>Demos</h2> <h3>Flickr Album</h3> <div class=\"well well-lg\"> <flickr-album album-id=\"albumID\"></flickr-album> </div> <div class=\"alert alert-info\" role=\"alert\"> The attribute \"album-id\" is passed with call to <a ng-href=\"https://www.flickr.com/services/api/flickr.people.getPhotos.html\" target=\"_blank\">flickr.people.getPhotos</a> as \"user_id\". </div> <codepen info=\"codepen.flickrAlbum\"> </codepen> </div> <!-- / ALBUM --> <!-- RECENT PHOTOS --> <div flex=\"100\" flex-order-gt-md=\"4\" flex-md=\"80\" flex-offset-md=\"10\" flex-gt-md=\"50\" flex-offset-gt-md=\"50\"> <h3>Recent Photos</h3> <div class=\"well well-lg\"> <recent-photos flickr-id=\"flickrID\" count=\"20\"></recent-photos> </div> <div class=\"alert alert-info\" role=\"alert \"> The attribute \"flickr-id \" is passed with call to <a ng-href=\"https://www.flickr.com/services/api/flickr.photosets.getPhotos.html \" target=\"_blank \">flickr.photosets.getPhotos</a> as \"photoset_id \". </div> <codepen info=\"codepen.flickrRecent\"> </codepen> </div> <!-- / RECENT PHOTOS --> <!-- DOCS --> <div flex=\"100\" flex-md=\"80\" flex-offset-md=\"10\" flex-gt-md=\"35\"> <h2>Run with Grunt</h2> <p>Download the <a href=\"https://github.com/kylemoseby/angular-flickr-integrations\">project</a> and run <kbd>grunt serve</kbd> </p> <h2>Dependencies</h2> <p>Dependencies are maintained using <a href=\"https://bower.io/\" target=\"_blank\">Bower</a>. A list of dependencies can be found in the bower.json file in the projects root directory. To update run: <kbd>bower update</kbd> </p> <h2>Setup</h2> <p>Include the file \"source/angular-flickr-integrations.js \" found in the root of this project. Individual js files can be found at \"app/flick/flickr-***.js \". Then load the module <code>mkm.flickr</code> in your app.</p> <pre>angular\n" +
    "  .module('demoApp', [\n" +
    "    'ngAnimate',\n" +
    "    'ngRoute',\n" +
    "    'ngSanitize',\n" +
    "    'ngTouch',\n" +
    "    'mkm.flickr'\n" +
    "  ]);</pre> <h3>Views</h3> <p>Each directive has one HTML file associated with it. The default view location is /flickr/flickr-****.html. This can be overwritten using the \"new-view \".</p> <pre>&lt;flickr-album album-id=&quot;foo&quot; new-view=&quot;bar/view.html&quot;&gt;&lt;/flickr-album&gt;</pre> <ul> <li>flickr-album.html</li> <li>flickr-img.html</li> <li>flickr-recent.html</li> </ul> <p>For production enviorments it is highly reccomended to use <a href=\"https://docs.angularjs.org/api/ng/service/$templateCache\" target=\"_blank\">$templateCache</a>. A npm/grunt plugin can be found <a href=\"https://www.npmjs.com/package/grunt-angular-templates\" target=\"_blank\">here</a>.</p> <p>The Gruntfile.js in this project's GitHub repository utilizes this plugin for \"production\" builds.</p> <!-- / DOCS --> </div></md-content>"
  );


  $templateCache.put('codepen/codepen-form.html',
    "<form action=\"http://codepen.io/pen/define\" method=\"POST\" target=\"_blank\"> <input type=\"hidden\" name=\"data\" value=\"{{options}}\"> <ul class=\"list-inline\"> <li ng-repeat=\"(type, code) in codeDOM\"> <button class=\"btn\" ng-click=\"showCode($event, type)\" ng-class=\"{'btn-default' :  codeVisible.indexOf(type) !== -1, 'btn-primary' :  codeVisible.indexOf(type) > -1}\"> {{type}} </button> </li> <li> <button class=\"btn btn-primary btn-codepen\" type=\"submit\"> <span class=\"btn-label\">Open with CodePen</span> <!--         <svg style=\"display: none;\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "          <symbol id=\"codepen-logo\" viewBox=\"0 0 120 120\">\n" +
    "            <path class=\"outer-ring\" d=\"M60.048 0C26.884 0 0 26.9 0 60.048s26.884 60 60 60.047c33.163 0 60.047-26.883 60.047-60.047 S93.211 0 60 0z M60.048 110.233c-27.673 0-50.186-22.514-50.186-50.186S32.375 9.9 60 9.9 c27.672 0 50.2 22.5 50.2 50.186S87.72 110.2 60 110.233z\" />\n" +
    "            <path class=\"inner-box\" d=\"M97.147 48.319c-0.007-0.047-0.019-0.092-0.026-0.139c-0.016-0.09-0.032-0.18-0.056-0.268 c-0.014-0.053-0.033-0.104-0.05-0.154c-0.025-0.078-0.051-0.156-0.082-0.232c-0.021-0.053-0.047-0.105-0.071-0.156 c-0.033-0.072-0.068-0.143-0.108-0.211c-0.029-0.051-0.061-0.1-0.091-0.148c-0.043-0.066-0.087-0.131-0.135-0.193 c-0.035-0.047-0.072-0.094-0.109-0.139c-0.051-0.059-0.104-0.117-0.159-0.172c-0.042-0.043-0.083-0.086-0.127-0.125 c-0.059-0.053-0.119-0.104-0.181-0.152c-0.048-0.037-0.095-0.074-0.145-0.109c-0.019-0.012-0.035-0.027-0.053-0.039L61.817 23.5 c-1.072-0.715-2.468-0.715-3.54 0L24.34 46.081c-0.018 0.012-0.034 0.027-0.053 0.039c-0.05 0.035-0.097 0.072-0.144 0.1 c-0.062 0.049-0.123 0.1-0.181 0.152c-0.045 0.039-0.086 0.082-0.128 0.125c-0.056 0.055-0.108 0.113-0.158 0.2 c-0.038 0.045-0.075 0.092-0.11 0.139c-0.047 0.062-0.092 0.127-0.134 0.193c-0.032 0.049-0.062 0.098-0.092 0.1 c-0.039 0.068-0.074 0.139-0.108 0.211c-0.024 0.051-0.05 0.104-0.071 0.156c-0.031 0.076-0.057 0.154-0.082 0.2 c-0.017 0.051-0.035 0.102-0.05 0.154c-0.023 0.088-0.039 0.178-0.056 0.268c-0.008 0.047-0.02 0.092-0.025 0.1 c-0.019 0.137-0.029 0.275-0.029 0.416V71.36c0 0.1 0 0.3 0 0.418c0.006 0 0 0.1 0 0.1 c0.017 0.1 0 0.2 0.1 0.268c0.015 0.1 0 0.1 0.1 0.154c0.025 0.1 0.1 0.2 0.1 0.2 c0.021 0.1 0 0.1 0.1 0.154c0.034 0.1 0.1 0.1 0.1 0.213c0.029 0 0.1 0.1 0.1 0.1 c0.042 0.1 0.1 0.1 0.1 0.193c0.035 0 0.1 0.1 0.1 0.139c0.05 0.1 0.1 0.1 0.2 0.2 c0.042 0 0.1 0.1 0.1 0.125c0.058 0.1 0.1 0.1 0.2 0.152c0.047 0 0.1 0.1 0.1 0.1 c0.019 0 0 0 0.1 0.039L58.277 96.64c0.536 0.4 1.2 0.5 1.8 0.537c0.616 0 1.233-0.18 1.77-0.537 l33.938-22.625c0.018-0.012 0.034-0.027 0.053-0.039c0.05-0.035 0.097-0.072 0.145-0.109c0.062-0.049 0.122-0.1 0.181-0.152 c0.044-0.039 0.085-0.082 0.127-0.125c0.056-0.055 0.108-0.113 0.159-0.172c0.037-0.045 0.074-0.09 0.109-0.139 c0.048-0.062 0.092-0.127 0.135-0.193c0.03-0.049 0.062-0.098 0.091-0.146c0.04-0.07 0.075-0.141 0.108-0.213 c0.024-0.051 0.05-0.102 0.071-0.154c0.031-0.078 0.057-0.156 0.082-0.234c0.017-0.051 0.036-0.102 0.05-0.154 c0.023-0.088 0.04-0.178 0.056-0.268c0.008-0.045 0.02-0.092 0.026-0.137c0.018-0.139 0.028-0.277 0.028-0.418V48.735 C97.176 48.6 97.2 48.5 97.1 48.319z M63.238 32.073l25.001 16.666L77.072 56.21l-13.834-9.254V32.073z M56.856 32.1 v14.883L43.023 56.21l-11.168-7.471L56.856 32.073z M29.301 54.708l7.983 5.34l-7.983 5.34V54.708z M56.856 88.022L31.855 71.4 l11.168-7.469l13.833 9.252V88.022z M60.048 67.597l-11.286-7.549l11.286-7.549l11.285 7.549L60.048 67.597z M63.238 88.022V73.14 l13.834-9.252l11.167 7.469L63.238 88.022z M90.794 65.388l-7.982-5.34l7.982-5.34V65.388z\" />\n" +
    "          </symbol>\n" +
    "        </svg>\n" +
    "        <svg class=\"logo\">\n" +
    "          <use xlink:href=\"#codepen-logo\"></use>\n" +
    "        </svg>\n" +
    " --> </button> </li> </ul> </form> <ul class=\"code-list list-unstyled\"> <li ng-repeat=\"(type, code) in codeDOM\" ng-show=\"codeVisible.indexOf(type) !== -1\"> <div class=\"codepen-type\">{{type}}</div> <pre class=\"codepen-code\">{{code}}</pre></li> </ul>"
  );

}]);

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
            'extras': 'o_dims,description',
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

  }])
  .controller('mainCtrlr', ['', function() {

  }]);

'use strict';

/**
 * @ngdoc directive
 * @name mkm.flickr.directive:flickrGallery
 * @description
 * # flickrGallery
 */
angular.module('mkm.flickr')
  .directive('flickrAlbum', ['restAPI', '$mdPanel', function($flickr, $mdPanel) {

    function link(scope) {

      scope.detailPanel = $mdPanel;

      var galleryID = scope.albumId;

      var galleryData = new $flickr.getPhotoset(galleryID);

      galleryData.then(function(data) {

        scope.gallery = data.data;

      });

      scope.photoDetail = null;
      scope.photoDetailIndx = null;

      /*
        ALBUM NAVIGATION
      */
      scope.thumbClick = function($event, img, ind) {

        scope.photoDetail = img;

        var position = this.detailPanel.newPanelPosition()
          .absolute()
          .center();

        /* OPEN THE PANEL */
        this.detailPanel.open({
          attachTo: angular.element(document.body),
          controller: photoDetailCtrl,
          controllerAs: 'ctrl',
          disableParentScroll: true,
          templateUrl: 'flickr/flickr-photo-detail.html',
          hasBackdrop: true,
          panelClass: 'flickr-photo-detail',
          position: position,
          trapFocus: true,
          zIndex: 150,
          clickOutsideToClose: true,
          escapeToClose: true,
          focusOnOpen: true,
          targetEvent: $event,
          locals: {
            photoDetail: scope.photoDetail,
            detailIndex: ind,
            photos: scope.gallery.photoset.photo
          }
        });
      };


      function photoDetailCtrl($scope, mdPanelRef, photoDetail, detailIndex, photos) {

        $scope._mdPanelRef = mdPanelRef;

        $scope.photoDetail = photoDetail;
        $scope.detailIndex = detailIndex;
        $scope.photos = photos;

        $scope.detailClose = function() {

          this._mdPanelRef.close().then(function() {

            angular.element(document.querySelector('.recent-tile')).focus();

          });
        };

        $scope.detailNext = function() {

          $scope.detailIndex++;

          photoDetailSet($scope.detailIndex);

        };

        $scope.detailPrev = function() {

          $scope.detailIndex--;

          photoDetailSet($scope.detailIndex);

        };


        function photoDetailSet(ind) {

          $scope.photoDetail = $scope.photos[ind];

        }

      }

    }

    return {
      templateUrl: 'flickr/flickr-album.html',
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
  .directive('flickrImg', [function() {
    return {
      templateUrl: function(element) {

        return element.attr('new-view') || 'flickr/flickr-img.html';
      },
      restrict: 'E',
      link: function(scope) {

        // function imgSetWidth() {
        // MAKES TESTING HARD TO USE WINDOW FIX LATER
        // var wdth = element.innerWidth();
        //   var wdth = window.innerWidth;

        //   if (wdth > 1600) {

        //     scope.size = 'h';

        //   } else if (800 > wdth > 1024) {

        //     scope.size = 'b';

        //   } else if (320 > wdth > 800) {

        //     scope.size = 'c';

        //   } else if (wdth > 320) {

        //     scope.size = 'n';
        //   }
        // }

        scope.size = 'b';

        // imgSetWidth();

        window.onresize = function() {

          // imgSetWidth();

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
  .directive('recentPhotos', ['restAPI', '$mdPanel', function($flickr, $mdPanel) {

    function link(scope) {

      scope.detailPanel = $mdPanel;

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

      scope.thumbnailClick = function($event, img, ind) {

        scope.photoDetail = img;

        var position = this.detailPanel.newPanelPosition()
          .absolute()
          .center();

        /* OPEN THE PANEL */
        this.detailPanel.open({
          attachTo: angular.element(document.body),
          controller: photoDetailCtrl,
          controllerAs: 'ctrl',
          disableParentScroll: true,
          templateUrl: 'flickr/flickr-photo-detail.html',
          hasBackdrop: true,
          panelClass: 'flickr-photo-detail',
          position: position,
          trapFocus: true,
          zIndex: 150,
          clickOutsideToClose: true,
          escapeToClose: true,
          focusOnOpen: true,
          targetEvent: $event,
          locals: {
            photoDetail: scope.photoDetail,
            detailIndex: ind,
            photos: scope.thumbnailsShow
          }
        });
      };


      function photoDetailCtrl($scope, mdPanelRef, photoDetail, detailIndex, photos) {

        $scope._mdPanelRef = mdPanelRef;

        $scope.photoDetail = photoDetail;
        $scope.detailIndex = detailIndex;
        $scope.photos = photos;

        $scope.detailClose = function() {

          this._mdPanelRef.close().then(function() {

            angular.element(document.querySelector('.recent-tile')).focus();

          });
        };

        $scope.detailNext = function() {

          $scope.detailIndex++;

          photoDetailSet($scope.detailIndex);

        };

        $scope.detailPrev = function() {

          $scope.detailIndex--;

          photoDetailSet($scope.detailIndex);

        };


        function photoDetailSet(ind) {
          $scope.photoDetail = $scope.photos[ind];
        }

      }

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
