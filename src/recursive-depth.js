const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
   let maxDepth = 1;
   //let depth = 1;
   for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])) {
      //depth += this.calculateDepth(arr[i]);
      maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i])+1);
      //depth = 1;
    }
   } 
   return maxDepth;
  }
}

const depthCalc = new DepthCalculator();

//let f = depthCalc.calculateDepth([1, 2, 3, 4, 5]);
let f1 = depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]);
let f2 = depthCalc.calculateDepth([[[]]]);

module.exports = {
  DepthCalculator
};
