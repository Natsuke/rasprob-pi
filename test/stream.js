var expect = require('chai').expect;
var rasprobPiApi = require('..');
var app = require('express')();
var request = require('request');

describe(':::: Stream ::::', function () {
  before(function () {
    
  });

  it('Can Stream', function (done) {
    request('http://localhost:3000/stream', function (error, response, body) {
      if (error) done(error);
      expect(response.statusCode).equal(200);
      expect(body).equal('something');
      done();
    });
  });
});
