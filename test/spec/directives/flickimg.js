'use strict';

describe('Directive: flickImg', function () {

  // load the directive's module
  beforeEach(module('flickrportfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<flick-img></flick-img>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the flickImg directive');
  }));
});
