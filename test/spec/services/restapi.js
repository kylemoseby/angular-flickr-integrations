'use strict';

describe('Service: restAPI', function() {

  // load the service's module
  beforeEach(module('flickrportfolioApp'));

  // instantiate service
  var restAPI;

  beforeAll(inject(function(_restAPI_) {
    restAPI = _restAPI_;
  }));

  it('should get photoset data from Flickr', function() {
    var photoset = restAPI.getPhotoset('72157642608822784');

    photoset.then(function(data) {
      console.log(data);

      expect(data.data.stat).toBe('suscess');
    });

    // expect(!!restAPI).toBe(true);
  });

  it('should throw an error when a bogus photoset ID', function() {

  });

  it('should get recent photos from Flickr', function() {

  });

  it('should throw error with wrong user ID', function() {

  });

  it('should get image information from Flickr', function() {

  });

  it('should throw an error with a bogus Img ID', function() {

  });
});
