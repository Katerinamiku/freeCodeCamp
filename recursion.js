// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return arr[n - 1] + sum(arr, n - 1);
  }
}
