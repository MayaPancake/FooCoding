'use strict';
// 1.1
const numbers = [1, 2, 3, 4];

//filtered even numbers
const myNumbers = myNumbers.filter((a, i)=> i % 2 === 0);
console.log(myNumbers);

//multiplied the value to 2 using map()
const doubleOddNumbers = filtered.map((value, index, array)=> {
        return value * 2
    });
console.log(doubleOddNumbers);

module.exports = {
    myNumbers,
    doubleOddNumbers,
  };