var numbers = process.argv.slice(2).map(parseFloat);

console.log(new Buffer(numbers).toString('hex'));

