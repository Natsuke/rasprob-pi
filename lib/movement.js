var gpio = require('pi-gpio');
var async = require('async');

module.exports = function (options) {
  var motorA = options.motorA;
  var motorB = options.motorB;
  var openPin = function (pinNumber, direction, done) {
    gpio.open(pinNumber, direction, function (err) {
      if (err) return done(err);
      done();
    });
  };

  var writeToPin = function (pinNumber, value, done) {
    gpio.read(pinNumber, function (err, oldValue) {
      if (err) return done(err);
      if (value != oldValue) {
        gpio.write(pinNumber, value, function (err) {
          if (err) return done(err);
        });
      }
      done();
    });
  };

  var closePin = function (pinNumber, done) {
    gpio.close(pinNumber, function (err) {
      if (err) return done(err);
      done();
    });
  }

  return {
    init: function (done) {
      async.parallel([
        function (cb) {
          openPin(motorA.up, "output", cb);
        },
        function (cb) {
          openPin(motorA.down, "output", cb);
        },
        function (cb) {
          openPin(motorA.enabled, "output", cb);
        },
        function (cb) {
          openPin(motorB.up, "output", cb);
        },
        function (cb) {
          openPin(motorB.down, "output", cb);
        },
        function (cb) {
          openPin(motorB.enabled, "output", cb);
        }
      ], done);
    },
    left: function (done) {
      async.parallel([
        function (cb) {
          writeToPin(motorB.up, 1, cb);
        },
        function (cb) {
          writeToPin(motorB.down, 0, cb);
        },
        function (cb) {
          writeToPin(motorB.enabled, 1, cb);
        }
      ], done);
    },
    right: function (done) {
      async.parallel([
        function (cb) {
          writeToPin(motorA.up, 1, cb);
        },
        function (cb) {
          writeToPin(motorA.down, 0, cb);
        },
        function (cb) {
          writeToPin(motorA.enabled, 0, cb);
        }
      ], done);
    },
    up: function (done) {
      async.parallel([
        function (cb) {
          writeToPin(motorA.up, 1, cb);
        },
        function (cb) {
          writeToPin(motorA.down, 0, cb);
        },
        function (cb) {
          writeToPin(motorA.enabled, 1, cb);
        },
        function (cb) {
          writeToPin(motorB.up, 1, cb);
        },
        function (cb) {
          writeToPin(motorB.down, 0, cb);
        },
        function (cb) {
          writeToPin(motorB.enabled, 1, cb);
        }
      ], done);
    },
    down: function (done) {
      async.parallel([
        function (cb) {
          writeToPin(motorA.up, 0, cb);
        },
        function (cb) {
          writeToPin(motorA.down, 1, cb);
        },
        function (cb) {
          writeToPin(motorA.enabled, 1, cb);
        },
        function (cb) {
          writeToPin(motorB.up, 0, cb);
        },
        function (cb) {
          writeToPin(motorB.down, 1, cb);
        },
        function (cb) {
          writeToPin(motorB.enabled, 1, cb);
        }
      ], done);
    },
    stop: function (done) {
      async.parallel([
        function (cb) {
          writeToPin(motorA.enabled, 0, cb);
        },
        function (cb) {
          writeToPin(motorB.enabled, 0, cb);
        }
      ], done);
    },
    close: function (done) {
      async.parallel([
        function (cb) {
          closePin(motorA.up, cb);
        },
        function (cb) {
          closePin(motorA.down, cb);
        },
        function (cb) {
          closePin(motorA.enabled, cb);
        },
        function (cb) {
          closePin(motorB.up, cb);
        },
        function (cb) {
          closePin(motorB.down, cb);
        },
        function (cb) {
          closePin(motorB.enabled, cb);
        }
      ], done);
    }
  }
};
