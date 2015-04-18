
var move = require('./lib/movement');

module.exports = function (server) {
  move.init();

  server.get('/stream', function (req, res, next) {
    res.writeHead(200);
    res.write('Stream');
    res.end();
  });

  server.get('/left', function (req, res, next) {
    move.left();
    res.writeHead(200);
    res.write('left');
    res.end();
  });

  server.get('/right', function (req, res, next) {
    move.right();
    res.writeHead(200);
    res.write('right');
    res.end();
  });

  server.get('/up', function (req, res, next) {
    move.up();
    res.writeHead(200);
    res.write('up');
    res.end();
  });

  server.get('/down', function (req, res, next) {
    move.down();
    res.writeHead(200);
    res.write('down');
    res.end();
  });

  server.get('/auto', function (req, res, next) {
    res.writeHead(200);
    res.write('auto');
    res.end();
  });

  server.get('/manual', function (req, res, next) {
    res.writeHead(200);
    res.write('manual');
    res.end();
  });

  server.get('/stop', function (req, res, next) {
    move.stop();
    res.writeHead(200);
    res.write('stop');
    res.end();
  });

  return server;
};
