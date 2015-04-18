var gpio = require('pi-gpio');
var async = require('async');

/**
 * Binding:
 *  - 16, 18 : +/- Left Motor
 *  - 22 : Enable left motor
 */

module.exports = {
  init: function () {
    async.parallel([
      gpio.open(16, 'output'),
      gpio.open(18, 'output'),
      gpio.open(22, 'output')
    ]);
  },
  left: function () {
    async.series([
      gpio.write(16, 1),
      gpio.write(18, 0),
      gpio.write(22, 1)
    ]);
  },
  right: function () {
    async.series([
      gpio.write(16, 1),
      gpio.write(18, 0),
      gpio.write(22, 1)
    ]);
  },
  up: function () {
    async.series([
      gpio.write(16, 1),
      gpio.write(18, 0),
      gpio.write(22, 1)
    ]);
  },
  down: function () {
    async.series([
      gpio.write(16, 1),
      gpio.write(18, 0),
      gpio.write(22, 1)
    ]);
  },
  stop: function () {
    async.series([
      gpio.write(16, 1),
      gpio.write(18, 0),
      gpio.write(22, 0)
    ]);
  }
};
