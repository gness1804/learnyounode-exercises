const fs = require('fs');

const callback = (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const result = data.split('\n').length - 1;
  console.log(result)
}

const file = process.argv[2];
const output = fs.readFile(file, 'utf8', callback)
