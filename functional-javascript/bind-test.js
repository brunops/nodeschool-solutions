function sum() {
  console.log(arguments);

  total = 0;
  for (var i = 0; i < arguments.length; ++i) {
    total += arguments[i];
  }

  return total;
}


console.log(sum(1,2,3,4,5));
console.log(sum(5, 5));

var boundSum = sum.bind(null, 5, 5);


console.log(boundSum(1,2,3,4,5));
console.log(boundSum(5, 5));

