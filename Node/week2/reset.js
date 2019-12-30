const fs = require('fs');
const myFile = './text.txt';

function reset() {
  fs.writeFile(myFile, '', err => {
    if (err) console.log(`Error message: ${err.message}`);
  })
}



module.exports = reset;