// https://javascript.plainenglish.io/how-to-use-import-instead-of-require-statements-in-a-node-app-short-f3eff5d3a90d
// in order to use import remmeber to add the "type": "module"
//  on the package.json
import fs from 'fs';

fs.writeFile('./memory/testStephan3.html', 'hello esteban', err => {
  if (err) throw err;
  console.log('Saved!');
});

fs.readFile('./memory/testStephan3.html', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});