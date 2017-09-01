const fs = require('fs');

const file = process.argv[2];
const output = fs.readFileSync(file).toString();
const count = output.split('\n').length - 1;
console.log(count)
