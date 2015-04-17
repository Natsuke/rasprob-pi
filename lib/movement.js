var gpio = require('gpio');

/**
 * Left Motor
 */
var gpioLeftUp = gpio.export(16, {
  direction: 'out',
  ready: function () {  }
});
var gpioLeftDown = gpio.export(18, {
  direction: 'out',
  ready: function () {  }
});
var gpioLeftEnable = gpio.export(22, {
  direction: 'out',
  ready: function () {  }
});

/**
 * Right Motor
 */
// TODO: add second motor binding
var gpioRightUp = gpio.export(19, {
  direction: 'out',
  ready: function () {  }
});
var gpioRightDown = gpio.export(20, {
  direction: 'out',
  ready: function () {  }
});
var gpioRightEnable = gpio.export(21, {
  direction: 'out',
  ready: function () {  }
});


module.exports = function () {
  return {
    left: function () {
      gpioRightUp.set();
      gpioRightDown.set(0);
      gpioLeftEnable.set();
    },
    right: function () {
      gpioLeftUp.set();
      gpioLeftDown.set(0);
      gpioLeftEnable.set();
    },
    up: function () {
      gpioLeftUp.set();
      gpioRightUp.set();
      gpioLeftDown.set(0);
      gpioRightDown.set(0);
      gpioLeftEnable.set();
      gpioRightEnable.set();
    },
    down: function () {
      console.log('Not yet implemented');
    },
    stop: function () {
      gpioLeftEnable.set(0);
      gpioRightEnable.set(0);
    }
  };
};
