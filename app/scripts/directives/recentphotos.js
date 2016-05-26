'use strict';

/**
 * @ngdoc directive
 * @name flickrportfolioApp.directive:recentPhotos
 * @description
 * # recentPhotos
 */
angular.module('flickrportfolioApp')
  .directive('recentPhotos', ['restAPI', function($flickr) {

    function link(scope, element) {

      console.log(scope);

      var userId = element.attr('user-id');

      scope.recent = scope.recent || {
        '_index_': null,
        'photos': null,
        '_photoDetail_': {

        },
        'showPhotos': [],
        'thumbsize': 'lg' // 'sm'
      };

      scope.recent.toggleThumbsize = function() {

        var currentSize = this.thumbsize;

        this.thumbsize = (currentSize === 'lg') ? 'sm' : 'lg';

        // NOT IDEAL
        // https://github.com/passy/angular-masonry/issues/71

        this.$root.$broadcast('masonry.reload');
      };

      scope.recent.thumbnailsAdd = function() {

        var showThese = scope.recent.photos.photo.splice(0, 10);

        scope.recent.showPhotos = scope.recent.showPhotos.concat(showThese);
      };

      scope.recent.thumbnailClick = function(img, ind) {
        console.log(this);

        this._photoDetail_ = img;
        this._index_ = ind;
      };

      var photoData = new $flickr.getRecent(userId);

      photoData.then(function(data) {
        scope.recent.photos = data.data.photos;

        scope.recent.thumbnailsAdd();
      });

    }

    return {
      link: link,
      templateUrl: 'flickr/flickr-recent.html',
      restrict: 'E',
      // scope: {
      //   galleryId: '=galleryId'
      // }
    };

  }]);
