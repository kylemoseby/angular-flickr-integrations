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

      scope.thumbnailClick = function($event, img) {
        scope.photoDetail = img;


        var position = this.detailPanel.newPanelPosition()
          .absolute()
          .center();

        /* OPEN THE PANEL */
        this.detailPanel.open({
          'attachTo': angular.element(document.body),
          'controller': PanelDialogCtrl,
          'controllerAs': 'ctrl',
          'disableParentScroll': true,
          'templateUrl': 'flickr/flickr-photo-detail.html',
          'hasBackdrop': true,
          'panelClass': 'flickr-photo-detail',
          'position': position,
          'trapFocus': true,
          'zIndex': 150,
          'clickOutsideToClose': true,
          'escapeToClose': true,
          'focusOnOpen': true,
          'targetEvent': $event,
          'locals': {
            photoDetail: scope.photoDetail
          }
        });
      };


      function PanelDialogCtrl($scope, mdPanelRef, photoDetail) {

        this._mdPanelRef = mdPanelRef;

        $scope.photoDetail = photoDetail;
      }


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
