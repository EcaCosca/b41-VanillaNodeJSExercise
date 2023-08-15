// https://www.w3schools.com/nodejs/nodejs_filesystem.asp

const fs = require('fs');

fs.writeFile('./memory/testStephan2.html', 'hello', err => {
  if (err) throw err;
  console.log('Saved!');
});