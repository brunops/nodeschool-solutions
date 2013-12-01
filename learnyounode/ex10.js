var net = require('net');

var server = net.createServer(function(socket) {
  socket.end(getFormatedDate());
});
server.listen(8000);

function getFormatedDate() {
  var now = new Date();

  return [
    now.getFullYear(), '-',
    (now.getMonth() + 1), '-',
    now.getDate(), ' ',
    now.getHours(), ':', now.getMinutes(),
    '\n'
  ].map(forceTwoDigits).join('');
}

function forceTwoDigits(number) {
  if (parseInt(number, 10)) {
    return number.length < 2 ? '0' + number : number;
  }
  else {
    return number;
  }
}
