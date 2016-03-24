var assert = require('assert');
var isThirteen = require('is-thirteen');
var alwaysThrirteen = require('./../index');
describe('Is this really thirteen?', function() {
  it('no really, is it thirteen', function() {
    assert.equal(true, isThirteen(alwaysThrirteen()).thirteen());
  });
});
