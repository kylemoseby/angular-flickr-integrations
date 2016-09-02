angular.module('mkm.flickr').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('flickr/flickr-album.html',
    "<!-- ERROR START --> <br>GITHUB {{albumId}} <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"gallery.stat === 'fail'\"> <b>An error occurred</b> <br> Code: {{gallery.code}} / Message: {{gallery.message}} </div> <!-- ERROR END --> <!-- THUMBNAILS START --> <md-grid-list md-gutter=\"0.33em\" md-cols-sm=\"2\" md-cols-md=\"4\" md-cols-lg=\"8\" md-cols-gt-lg=\"8\" md-row-height=\"1:1\"> <md-grid-tile ng-repeat=\"img in gallery.photoset.photo\" class=\"gallery-thumbs\"> <img ng-src=\"https://farm{{img.farm-id}}.staticflickr.com/{{img.server-id}}/{{img.id}}_{{img.secret}}_q.jpg\" ng-click=\"thumbClick($event, img, $index)\"> </md-grid-tile> </md-grid-list> <!-- THUMBNAILS END -->"
  );


  $templateCache.put('flickr/flickr-img.html',
    "<img ng-src=\"https://farm{{img.farm-id}}.staticflickr.com/{{img.server-id}}/{{img.id}}_{{img.secret}}_{{size}}.jpg\">"
  );


  $templateCache.put('flickr/flickr-photo-detail.html',
    "<!-- PHOTODETAIL START --> <div class=\"flickr-detail-photo\"> <flickr-img info=\"photoDetail\"></flickr-img> <div class=\"recent-detail-descrip\"> {{photoDetail.title}} {{photoDetail.description._content}} </div> <nav> <ul class=\"pager\"> <li ng-show=\"detailIndex > 0\"> <a ng-click=\"detailPrev()\"> <span class=\"glyphicon glyphicon-chevron-left\"></span> </a> </li> <li> <a ng-click=\"detailClose()\"> <span class=\"glyphicon glyphicon-remove\"></span> </a> </li> <li ng-show=\"detailIndex < photos.length - 1\"> <a ng-click=\"detailNext()\"> <span class=\"glyphicon glyphicon-chevron-right\"></span> </a> </li> </ul> </nav> </div> <!-- PHOTODETAIL END -->"
  );


  $templateCache.put('flickr/flickr-recent.html',
    "<!-- ERROR START --> <br> <div class=\"alert alert-danger\" role=\"alert\" ng-show=\"recent.stat == 'fail'\"> <b>An error occurred</b> <br> Code: {{recent.code}} / Message: {{recent.message}} </div> <!-- ERROR END --> <!-- THUMBNAILS START --> <md-grid-list md-gutter=\"0.33em\" md-cols=\"6\" md-row-height=\"1:1\" class=\"test\"> <md-grid-tile ng-repeat=\"img in thumbnailsShow\" class=\"recent-tile\"> <img ng-src=\"https://farm{{img.farm-id}}.staticflickr.com/{{img.server-id}}/{{img.id}}_{{img.secret}}_q.jpg\" ng-click=\"thumbnailClick($event, img, $index)\"> </md-grid-tile> </md-grid-list> <!-- THUMBNAILS END --> <!-- NAV START --> <nav> <ul class=\"pager\" ng-hide=\"recent.photos.photo.length === 0\"> <li> <a ng-click=\"thumbnailsAdd()\"> <span class=\"glyphicon glyphicon-plus\"></span> </a> </li> </ul> </nav> <!-- NAV END -->"
  );

}]);
