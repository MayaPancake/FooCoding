'use strict';

const array = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const multiplyAll = array.flat();

const result = multiplyAll.reduce((acc, currValue) => {
  return acc * currValue
}, 1)

console.log(result); // 720

// Do not change or remove anything below this line
module.exports = multiplyAll;