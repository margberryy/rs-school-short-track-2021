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
  const arr = [];
  let n = 2;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      if (typeof arr[arr.indexOf(str[i]) - 1] === 'number') {
        arr[arr.indexOf(str[i]) - 1] += 1;
      } else {
        arr.splice(arr.indexOf(str[i]), 0, n);
      }

      n++;
    } else {
      arr.push(str[i]);
      n = 2;
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
