'use strict';

describe('Directive: flickrPhoto', function() {

  // load the directive's module
  beforeEach(module('flickrportfolioApp'));

  var element,
    scope;

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile) {
    element = angular.element('<flickr-photo></flickr-photo>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the flickrPhoto directive');
  }));
});
