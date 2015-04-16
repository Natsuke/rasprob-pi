
var ffmpeg = require('fluent-ffmpeg');

module.exports = function (res) {
  ffmpeg()
    .input(fs.createReadStream('sample.h264'))
    .output(res);
};
