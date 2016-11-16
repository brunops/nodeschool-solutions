
function *factorial(n) {
  let curr = 1
  let total = 1
  while (n >= curr) yield total = curr++ * total
}

for (let a of factorial(5)) console.log(a)
