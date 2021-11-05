function diagonalDifference(arr) {
  // Write your code here
  let ltr = 0;
  let rtl = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j === i) {
        ltr += arr[i][j];
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i + j === arr[i].length - 1) {
        rtl += arr[i][j];
      }
    }
  }

  return Math.abs(ltr - rtl);
}

/*
 * Given a square matrix, calculate
 * the absolute difference between the sums of its diagonals.
 * example:
 * [
 * 1, 2, 3
 * 2, 2, 3
 * 4, 1, 4
 * ]
 *
 * return ((1+2+4) - (3+2+4))
 */
