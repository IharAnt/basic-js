const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let array = domains.map(d => d.split('.').reverse());
  let maxdepth = array.reduce((max, c) => max = c.length>max?c.length:max, 0);
  let result = new Object();
  for (let i = 1; i <= maxdepth; i++) {
    let domains = array.filter(a=>a.length>=i).map(a=>'.' + a.slice(0, i).join('.'));

    let sets = new Set(domains);
    for (const set of sets) {
      result[set] = domains.filter(d=>d === set).length;
    }
  }
  return result;
}

let p = getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])

module.exports = {
  getDNSStats
};
