function lonelyinteger(a) {
  // Write your code here
  let unique = 0;
  let result;
  for (let i = 0; i < a.length; i++) {
    unique = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j]) {
        unique++;
      }
      if (unique > 1) break;
    }
    if (unique === 1) {
      result = a[i];
      break;
    }
  }

  return result;
}
/*
 * Given an array of integers, where all elements but one occur twice,
 * find the unique element.
 * example:
 * a = [1, 2, 3, 3, 2, 1, 9, 2]
 * the unique element is 9
 */
