total = 0;
process.argv.slice(2).forEach(function(val) {
  total += +val;
});

console.log(total);
