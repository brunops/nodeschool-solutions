module.exports = reduce;

function reduce(arr, fn, init, idx) {
  idx = idx || 0;

  // base case / last element
  if (idx === arr.length - 1) {
    return fn(init, arr[idx], idx, arr);
  }

  return reduce(arr, fn, fn(init, arr[idx], idx, arr), ++idx);
}

