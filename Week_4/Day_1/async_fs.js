const fs = require('fs');

// console.log(fs);

console.log('Synchronous code starts here...');

fs.readFile('./message.txt', { encoding: 'utf-8' }, (error, data) => {
  console.log('Finished reading file.');
  console.log(data);
})

console.log('Synchronous code ends here...');

fs.writeFile('./myFile.txt', 'This is my text :)', () => {
  console.log('Finished writing file.');
})