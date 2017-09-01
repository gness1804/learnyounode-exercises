const fs = require('fs');

const callback = (err, data) => {
  const type = process.argv[3];
  if (err || !type) {
    console.error(err);
    return;
  }

  const filteredData = data.filter((d) => {
    return d.match(`.${type}`);
  });

  for (file of filteredData){
    console.log(file)
  }
}

const dir = process.argv[2];
const output = fs.readdir(dir, callback);
