const findMissing = (list) => {
  let [min, max] = [0, list.length - 1];
  const commDiff = Math.min(list[min + 1] - list[min], list[max] - list[max - 1]);  
  // go to middle element
    // if middle element equals to min + index * commDiff >>> missing number to the right
    // if not >>> to the left
  // binary search loop will run until hign and low values will switch places
  // when it happens >> missing elem will be found as list[high] + commdiff or list[low] - commDiff
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    console.log(mid);
    list[mid] === list[0] + (commDiff * mid) ? min = mid + 1 : max = mid - 1;
  }
  return list[max] + commDiff;
}

// test suite

const testCases = [
  {
    "ap": [1, 2, 4],
    "expected": 3
  },
  {
    "ap": [25, 43, 61, 79, 97, 115, 141],
    "expected": 123
  },
  {
    "ap": [18, 20, 22, 24, 26, 28, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    "expected": 30
  },
  {
    "ap": [-8, -7, -5, -4, -3, -2, -1, 0, 1, 2],
    "expected": -6
  },
  {
    "ap": [36, 41, 46, 51, 56, 66, 71, 76, 81, 86, 91, 96],
    "expected": 61
  },
];

for (let test of testCases) {
  console.log("~~~~~~~~~~~~");
  console.log("for list");
  console.log(test.ap);
  console.log(`result is ${findMissing(test.ap)}`);
  console.log(`expected is ${test.expected}`);  
};