const rfs = require('rotating-file-stream');
const path = require('path');

const pad = num => (num > 9 ? "" : "0") + num;
const generator = (time, index) => {
  if (!time) return "file.log";

  var month = time.getFullYear() + "" + pad(time.getMonth() + 1);
  var day = pad(time.getDate());
  console.log(month)

  return `${month}/${month}${day}-${index}-file.log`;
};

// create a rotating write stream
module.exports = rfs.createStream(generator, {
  size: '10M', // rotate every 10 MegaBytes written
  interval: '1d', // rotate daily
  path: path.join(path.resolve(__dirname,'..','..'), 'storages','logs'),
  compress: 'gzip', // compress rotated files
});
