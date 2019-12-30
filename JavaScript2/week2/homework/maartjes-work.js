'use strict';
//1.2 
const monday = [{
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [{
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];
//merge monday and tuesday in one variable
const bothDays = [monday, tuesday];

//Reduce the array of arrays into a single one
const inOneArray = bothDays.reduce((acc, currValue) => {
  return acc.concat(currValue);
}, [])


//  duration's value
const timeDuration = [];
inOneArray.forEach(bothDays => {
  timeDuration.push(bothDays.duration);
});


// converting string to integers
const integers = timeDuration;
const result = integers.map(function (x) {
  return parseInt(x, 10);
});


// Filter less than 2 hours
const twoHoursAndUp = timeDuration.filter((a, i) =>
  a >= 120 != 0);

// Total of duration 120 and up
const sumOfDuration = twoHoursAndUp.reduce(add, 0);

function add(acc, a) {
  return acc + a;
}

/* const sumOfDuration = twoHoursAndUp.reduce((acc, currValue) => {
  return acc + currValue;
}, 0);
console.log(sumOfDuration); */
//other solution
//const sum = [1, 2, 3].reduce((partial_sum, a) => partial_sum + a,0);
//console.log(sum);

//converting minutes to hours
const hours = Math.trunc(sumOfDuration / 60);
const minutes = sumOfDuration % 60;
const minutesToHours = Math.floor(hours +"." + minutes);
/* 
  function convertedToHour(a) {
    const hours = Math.trunc(a / 60);
    const minutes = a % 60;
    console.log(hours + "." + minutes);
  }
convertedToHour(sumOfDuration); */

//multipy all the sum of duration to €20/hour
const ratePerHour = 20;
const totalRate = Math.floor(minutesToHours * ratePerHour);
const totalAmount = "€"+ totalRate;
console.log(totalAmount);




