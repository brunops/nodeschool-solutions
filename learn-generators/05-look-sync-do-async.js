
var fs = require('fs')

function run(generator) {
  const it = generator(go)

  function go(err, result) {
    if (err) return it.throw(err)
    it.next(result)
  }

  go()
}

run(function* (done) {
  let firstFile

  try {
    const files = yield fs.readdir('NoNoNo', done)
    firstFile = files[0]
  } catch (e) {
    firstFile = null
  }

  console.log(firstFile)
})

