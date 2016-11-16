
function *upper(list) {
  for (let i = 0; i < list.length; ++i) {
    try {
      yield list[i].toUpperCase()
    } catch (e) {
      yield null
    }
  }
}

let items = [ 'a', 'B', 1, 'c' ]

for (let a of upper(items)) console.log(a)
