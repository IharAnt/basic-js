const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return str;
  }
  let result = "";
  let array = Array.from(str);
  let lastSybol = array[0];
  let count = 1;
  for (let i = 1; i < array.length; i++) {
    if (lastSybol !== array[i]) {
      if (count > 1) {
        result += `${count}${lastSybol}`;
      } else {
        result += lastSybol;
      }
      lastSybol = array[i];
      count = 1;
    } else {
      count++;
    }
  }

  if (count > 1) {
    result += `${count}${lastSybol}`;
  } else {
    result += lastSybol;
  }
  return result;
}

let r = encodeLine("");

module.exports = {
  encodeLine,
};
