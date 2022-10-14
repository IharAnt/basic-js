const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^', ],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if(!matrix){
    return 0;
  }
  if(matrix.length === 0) {
    return 0;
  }
  let count = 0;

  for(let i = 0; i < matrix.length; i++) {
    count += matrix[i].filter(c=>c==='^^').length;;
  }
  return count;
}

// countCats([
//     [0, 1, '^^', '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2]
//    ])

module.exports = {
  countCats
};
