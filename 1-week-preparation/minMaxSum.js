function miniMaxSum(arr) {
  // Write your code here
  const newArr = arr.sort();
  const minSum = newArr.slice(0, newArr.length - 1).reduce((a, b) => a + b);
  const maxSum = newArr.slice(1, newArr.length).reduce((a, b) => a + b);
  console.log(`${minSum} ${maxSum}`);
}

/**
 * Given five positive integers, find the minimum and
 * maximum values that can be calculated by summing exactly
 * four of the five integers. Then print the respective
 * minimum and maximum values as a single line of two
 * space-separated long integers.
 **/
