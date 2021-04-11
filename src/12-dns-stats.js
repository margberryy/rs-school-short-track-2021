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
  const numberOfDomains = {};
  domains.forEach((addresses) => {
    const address = addresses.split('.');
    let lastElem = '';
    for (let i = address.length - 1; i >= 0; i--) {
      lastElem += `.${address[i]}`;
      if (lastElem in numberOfDomains) {
        numberOfDomains[`${lastElem}`] += 1;
      } else {
        numberOfDomains[`${lastElem}`] = 1;
      }
    }
  });

  return numberOfDomains;
}

module.exports = getDNSStats;
