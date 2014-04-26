

var buffers = [];

process.stdin.on('data', function (buf) {
  buffers.push(buf);
});

process.stdin.on('end', function () {
  console.log(Buffer.concat(buffers));
});
