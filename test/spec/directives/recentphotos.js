'use strict';
var $ = $ || {};

describe('Directive: recentPhotos', function() {

  var element,
    $rootScope;

  // load the directive's module
  beforeEach(module('flickrportfolioApp'));

  beforeEach(module('app/flickr/flickr-recent.html'));

  beforeEach(inject(function(_$rootScope_) {

    console.log(_$rootScope_);

    // template = $templateCache.get('app/flickr/flickr-recent.html');

    // $templateCache.put('flickr/flickr-recent.html', template);

    // The injector unwraps the underscores (_) from around the parameter names when matching
    $rootScope = _$rootScope_;

    // DEFAULT
    $rootScope.index = null;
    $rootScope.photoDetail = {};

    $rootScope.count = 10;
    $rootScope.step = 5;
    $rootScope.thumbsize = 'lg'; // 'sm'
  }));


  // it('should make hidden element visible', inject(function() {
  //   // element = angular.element('<recent-photos></recent-photos>');
  //   // element = $compile(element)($rootScope);
  //   // expect(element.text()).toBe('this is the recentPhotos directive');
  // }));

  it('should have a limited number of photos to start', function($compile) {
    console.log($rootScope);

    // element = $compile('<recent-photos></recent-photos>')($rootScope);

    $rootScope.$digest();

    expect(true).toBe(true);
  });

  // it('should only add a specified number of photos to the screen', function() {

  // });

  // it('should be able to set a photoDetail', function() {

  // });

  // it('should change a photoDetail', function() {

  // });

  // it('should hide a photoDetail', function() {

  // });
});
