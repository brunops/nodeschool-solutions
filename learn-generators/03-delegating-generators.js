
function *flat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].constructor === Array) yield *flat(arr[i])
    else yield arr[i]
  }
}

const A = [ 1, [ 2, [ 3, 4 ], 5 ], 6 ]

for (let a of flat(A)) console.log(a)
