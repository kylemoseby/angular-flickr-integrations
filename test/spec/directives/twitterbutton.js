'use strict';

describe('Directive: twitterButton', function () {

  // load the directive's module
  beforeEach(module('flickrportfolioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<twitter-button></twitter-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the twitterButton directive');
  }));
});
