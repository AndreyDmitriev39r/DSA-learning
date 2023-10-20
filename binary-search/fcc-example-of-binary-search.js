// TASK LINK https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/implement-binary-search

function binarySearch(searchList, value) {
  const arrayPath = [];
  let [min, max] = [0, searchList.length - 1]; // array can be not an AP here, thus working with it's indices for setting min-max-middle
  let mid = Math.floor((max - min) / 2); // using .floor according to task
  while (searchList[mid] !== value) { // while loop is for building path
    arrayPath.push(searchList[mid]);
    if (max < min) return "Value Not Found"; // edge case >> when max and min will overlap, means value is not in list
    // below is core logic
    // if value with index === mid is too high, then we interested in elements from min to mid - 1 for next iteration
    // if value with index === mid is too low, then we interested in elements from mid + 1 to max for next iteration
    searchList[mid] > value ? max = mid - 1 : min = mid + 1;
    mid = min + Math.floor((max - min) / 2); // updating mid for next iteration
  }
  arrayPath.push(value); // pushing found value to the result to complete the task
  return arrayPath;
}