var expect = require('chai').expect,
    rasprobPiApi = require('..');

describe('rasprob-pi-api', function() {
  it('should say hello', function(done) {
    expect(rasprobPiApi()).to.equal('Hello, world');
    done();
  });
});
