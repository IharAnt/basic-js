const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, 
                        separator = '+', 
                        addition = '',
                        additionRepeatTimes = 1,
                        additionSeparator = '|'}) {
  let result = ''; 
  result = Array(repeatTimes)
            .fill(String(str) + Array(additionRepeatTimes)
                                .fill(String(addition))
                                .join(additionSeparator))
            .join(separator);
  return result;
}

//let r = repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });
let f = repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });
module.exports = {
  repeater
};
