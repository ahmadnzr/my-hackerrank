function plusMinus(arr) {
  // Write your code here
  const n = arr.length;
  let negative = 0;
  let positive = 0;
  let zero = 0;

  arr.map((i) => {
    if (i < 0) negative++;
    else if (i > 0) positive++;
    else zero++;
  });

  console.log(positive / n);
  console.log(negative / n);
  console.log(zero / n);
}

/**
 * Given an array of integers, calculate the ratios of its elements that are positive,
 * negative, and zero.
 * Print the decimal value of each fraction on a new line with 6 places after the decimal.
 **/
