'use strict';

describe('ApiCaller', function() {
  var apicaller;

  beforeEach(function() {
    apicaller = new ApiCaller;
  })

  describe('.callApi', function() {
    it('can call the requested api', function() {
      expect(apicaller.callApi()).toEqual('X')
    })
  })
})
