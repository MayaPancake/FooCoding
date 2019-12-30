'use strict';

function repeatStringNumTimes(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  const origStr = str;
  for (let i = 1; i < num; i++) {
    str += origStr;
  }
  return str;
}

console.log(repeatStringNumTimes("abc", 3));

function repeatStringNumTimes(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  const origStr = str;
  let i = 1;
  while (i < num) {
    str += origStr;
    i++;
  }
  return str;
}

console.log(repeatStringNumTimes("abc", 3));

function repeatStringNumTimes(str, num) {
  if (typeof num !== 'number' || num < 1) {
    return '';
  }
  const origStr = str;
  let i = 1;
  do {
    str += origStr;
    i++;
  } while (i < num);
  return str;
}

console.log(repeatStringNumTimes("abc", 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};