/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr1) {
  const arr = arr1;
  const endArr = arr.length - 1;
  let n = 1;

  for (let i = 0; i < endArr - i; i++) {
    const endArrJ = endArr - i;
    let sort = false;
    for (let j = 0; j < endArrJ;) {
      if (arr[j] === -1) {
        j++;
      } else if (arr[j + n] === -1) {
        n++;
      } else if (arr[j] > arr[j + n]) {
        [arr[j], arr[j + n]] = [arr[j + n], arr[j]];
        j++;
        n = 1;
        sort = true;
      } else {
        j++;
        n = 1;
      }
    }
    if (sort === false) break;
  }
  return arr;
}

module.exports = sortByHeight;
