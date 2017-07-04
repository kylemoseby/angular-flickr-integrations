// (function() {
'use strict';

/**
 * @ngdoc service
 * @name mkm.codePen
 * @description
 * # directives to post to codepen
 * Service in the mkm.codePen
 */
angular.module('mkm.codepen', [
    'ngMaterial'
  ])
  .directive('codepen', ['$http', function($http) {
    // Runs during compile
    return {
      // name: '',
      // priority: 1,
      // terminal: true,
      scope: {
        pen: '=info'
      }, // {} = isolate, true = child, false/undefined = no change
      // controller: function($scope, $element, $attrs, $transclude) {},
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
      // template: '',
      templateUrl: 'codepen/codepen-form.html',
      // replace: true,
      transclude: true,
      // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
      // link: function($scope, iElm, iAttrs, controller) {
      link: function($scope) {

        var escapedCode = $scope.options = {
          //   // All Optional
          title: $scope.pen.title,
          description: $scope.pen.description,
          // private: false, // true || false
          // tags: $scope.pen.tags, // an array of strings
          // editors: '101', // Set which editors are open. In this example HTML open, CSS closed, JS open
          // layout: 'left', // top | left | right
          // html: $scope._html_,
          //   html_pre_processor: 'none' || 'slim' || 'haml' || 'markdown',
          // css: $scope._css_,
          // css_pre_processor: 'less', // 'none' || 'less' || 'scss' || 'sass' || 'stylus',
          //   css_starter: 'normalize' || 'reset' || 'neither',
          //   css_prefix: 'autoprefixer' || 'prefixfree' || 'neither',
          //   js: 'alert(\'test\');',
          //   js_pre_processor: 'none' || 'coffeescript' || 'babel' || 'livescript' || 'typescript',
          //   html_classes: 'loading',
          // head: '<meta name=\'viewport\' content=\'width=device-width\'>',
          css_external: extrFormat($scope.pen.css_external), // semi-colon separate multiple files
          js_external: extrFormat($scope.pen.js_external) // semi-colon separate multiple files
        };

        var _codeDOM_ = {};

        function getExternal(url, attr) {
          $http({ method: 'GET', url: url })
            .then(function(response) {

              _codeDOM_[attr] = response.data;

              escapedCode[attr] = response.data;

            });
        }

        function extrFormat(resource) {
          return resource.join(';');
        }

        getExternal($scope.pen.html, 'html');
        getExternal($scope.pen.css, 'css');
        getExternal($scope.pen.js, 'js');

        $scope.codeDOM = _codeDOM_;

        $scope.codeVisible = [];

        $scope.showCode = function($event, type) {

          var typeIndOf = $scope.codeVisible.indexOf(type);

          $event.preventDefault();

          if (typeIndOf === -1) {

            $scope.codeVisible.push(type);

          } else {

            $scope.codeVisible.splice(typeIndOf, typeIndOf + 1)

          }
        };
      }
    };
  }]);;
