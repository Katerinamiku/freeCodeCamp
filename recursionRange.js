// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const newArray = rangeOfNumbers(startNum, endNum - 1);
    newArray.push(endNum);
    return newArray;
  }
}
