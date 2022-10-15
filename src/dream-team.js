const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!members) {
    return false;
  }

  if(!Array.isArray(members)) {
    return false;
  }

  let names = members
              .filter(m=> typeof m === 'string')
              .map(m => m.trim().charAt(0).toUpperCase())
              .sort((a, b) => a > b ? 1: -1)
              .join('');
  return names;
}

let dfdf = createDreamTeam(4);

module.exports = {
  createDreamTeam
};
