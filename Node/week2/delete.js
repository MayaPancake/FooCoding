const fs = require('fs');
const myFile = './text.txt';

fs.unlink(myFile, err => {
  if (err) console.log(`Error message: ${err.message}`);
  console.log('delete complete');
});