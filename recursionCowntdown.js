// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const newArray = countdown(n - 1);
    newArray.unshift(n);
    return newArray;
  }
}
