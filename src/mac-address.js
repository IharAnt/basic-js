const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let array = n.split('-');
  if(array.length < 6) return false;

  for (let i = 0; i < array.length; i++) {
    if(!isHex(array[i])) return false;
  }

  return true;
}

function isHex(str)
{
 regexp = /^[0-9a-fA-F]+$/;
 return regexp.test(str);     
}

let r = isMAC48Address('00-1B-63-84-45-E6');

module.exports = {
  isMAC48Address
};
