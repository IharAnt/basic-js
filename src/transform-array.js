const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        arr.splice(i+1, 1);
        break;
      case '--discard-prev':
        if(arr[i-1] && !arr[i-1].toString().includes('--')) {
          result.splice(-1, 1);
        }
        break;
      case '--double-next':
        if(arr[i+1] && !arr[i+1].toString().includes('--')) {
          result.push(arr[i+1]);
        }
        break;
      case '--double-prev':
        if(arr[i-1] && !arr[i-1].toString().includes('--')) {
          result.push(arr[i-1]);
        }
        break;     
      default:
        result.push(arr[i]);
        break;
    }
  }

  return result;
}

let a = transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]);
let b = transform([1, 2, 3, '--discard-prev', 4, 5]); 

module.exports = {
  transform
};
