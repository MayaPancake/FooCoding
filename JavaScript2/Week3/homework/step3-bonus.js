'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];


const uniqueValues = values.filter((item, index) => {
  return values.indexOf(item) >= index;
});

console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;