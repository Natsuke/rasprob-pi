var expect = require('chai').expect;
var rasprobPiApi = require('..');
var express = require('express');
var app = express();
var request = require('request');

describe(':::: API ::::', function() {
  before(function () {
    app = rasprobPiApi(app);
    app.listen(3000);
  });

  beforeEach(function (done) {
    done();
  });

  it('Should turn left', function (done) {
    request('http://localhost:3000/left', function (error, response, body) {
      expect(response.statusCode).equal(200);
      expect(body).equal('left');
      done();
    });
  });

  it('Should turn righ', function (done) {
    request('http://localhost:3000/right', function (error, response, body) {
      expect(response.statusCode).equal(200);
      expect(body).equal('right');
      done();
    });
  });

  it('Should go forward', function (done) {
    request('http://localhost:3000/up', function (error, response, body) {
      expect(response.statusCode).equal(200);
      expect(body).equal('up');
      done();
    });
  });
});
