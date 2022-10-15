const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const seasons = [
  {
    name: 'winter',
    monthes: [12, 1, 2],
  },
  {
    name: 'spring',
    monthes: [3, 4, 5],
  },
  {
    name: 'summer',
    monthes: [6, 7, 8],
  },
  ,
  {
    name: 'autumn',
    monthes: [9, 10, 11],
  },
]

function getSeason(date) {
  let result = 'Unable to determine the time of year!';
  if(!date) {
    return result;
  }
  //let b = Object.getOwnPropertyNames(date);
  if(!(date instanceof Date) || Object.getOwnPropertyNames(date).length !== 0) {
    throw new Error('Invalid date!');
  }
  
  let month = date.getMonth()
  
  switch(month) {
    case 11:
    case 0:
    case 1: 
      result = 'winter';
    break;
    case 2:
    case 3:
    case 4: 
      result = 'spring';
    break;
    case 5:
    case 6:
    case 7: 
      result = 'summer';
    break;
    case 8:
    case 9:
    case 10: 
      result = 'autumn';
    break;
  }

  return result;
}

// const deeperFakeDate = {
//   toString() {
//       return Date.prototype.toString.call(new Date());
//   },
//   getMonth() {
//       return Date.prototype.getMonth.call(new Date());
//   },
//   getFullYear() {
//       return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
//   },
//   getDate() {
//       return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
//   },
//   getHours() {
//       return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
//   },
//   getMinutes() {
//       return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
//   },
//   getSeconds() {
//       return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
//   },
//   getMilliseconds() {
//       return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
//   },
//   getDay() {
//       return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

// let a  = getSeason(deeperFakeDate);

module.exports = {
  getSeason
}
