var api = require('./lib/movements');

module.exports = function (server, options) {
  var move = api(options);
  move.init();

  var errorLog = function (err, res) {
    console.log(err);
    res.writeHead(500);
    res.write(err.message);
  };

  server.get('/left', function (req, res, next) {
    move.left(function (err) {
      if (err) {
        errorLog(err, res);
      } else {
        res.writeHead(200);
        res.write("Left");
      }
      res.end();
    });
  });

  server.get('/right', function (req, res, next) {
    move.right(function (err) {
      if (err) {
        errorLog(err, res);
      } else {
        res.writeHead(200);
        res.write("Right");
      }
      res.end();
    });
  });

  server.get('/up', function (req, res, next) {
    move.up(function (err) {
      if (err) {
        errorLog(err, res);
      } else {
        res.writeHead(200);
        res.write("Up");
      }
      res.end();
    });
  });

  server.get('/down', function (req, res, next) {
    move.down(function (err) {
      if (err) {
        errorLog(err, res);
      } else {
        res.writeHead(200);
        res.write("Down");
      }
      res.end();
    });
  });

  server.get('/stop', function (req, res, next) {
    move.stop(function (err) {
      if (err) {
        errorLog(err, res);
      } else {
        res.writeHead(200);
        res.write("Stop");
      }
      res.end();
    });
  });

  server.get('/init', function (req, res, next) {
    move.init(function (cb) {
      if (err) {
        errorLog(err, res);
      } else {
        res.writeHead(200);
        res.write("Init");
      }
      res.end();
    });
  });

  server.get('/close', function (req, res, next) {
    move.close(function (err) {
      if (err) {
        errorLog(err, res);
      } else {
        res.writeHead(200);
        res.write("Close");
      }
      res.end();
    });
  });

  return server;
};
