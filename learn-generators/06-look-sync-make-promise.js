
const askFoo = () => new Promise((resolve) => resolve('foo'))

const run = generator => {
  const it = generator()
    
  it.next().value
    .then(result => it.next(result)) 
    .catch(err => it.throw(err))
}

run(function* () {
  try {
    const foo = yield askFoo()
    console.log(foo)
  } catch (e) {
    console.log(e)
  }
})
