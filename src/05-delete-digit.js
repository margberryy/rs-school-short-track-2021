/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString().split('');
  const min = Math.min(...str);
  str.splice(str.indexOf(min.toString()), 1);
  return Number(str.join(''));
}

module.exports = deleteDigit;
