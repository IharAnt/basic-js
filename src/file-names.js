const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  for (const file of names) {
    let countFiles = result.filter(f => isEqualsFileNames(f, file)).length;
    if(countFiles>0){
      result.push(file+`(${countFiles})`);
    } else {
      result.push(file);
    }
  }
  return result;
}

function isEqualsFileNames(nameFromList, name) {
  if(nameFromList === name) {
    return true;
  }
  let clearName = nameFromList;
  if(nameFromList.indexOf('(')>-1) {
    let array = nameFromList.split('(');
    clearName = array.slice(0, array.length-1).join('(');
  }
  return clearName === name;
}

module.exports = {
  renameFiles
};
