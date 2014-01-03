module.exports = duckCount;

function duckCount() {
  return Array.prototype.slice.call(arguments, 0).filter(function(arg) { 
    return Object.prototype.hasOwnProperty.call(arg, 'quack');
  }).length;
}
