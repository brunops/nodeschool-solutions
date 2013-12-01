var tr = require('through');

process.stdin.pipe(tr(bufferToUpcaseStr)).pipe(process.stdout);


// Function used by through module
// 'this' is bound to the through stream
function bufferToUpcaseStr(buffer) {
  this.queue(buffer.toString().toUpperCase());
}
