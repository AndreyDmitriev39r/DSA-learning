//  utils

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[secondIndex];
  array[secondIndex] = array[firstIndex];
  array[firstIndex] = temp;
}

const insert = (array, rightIndex) => {
  let keyPos = rightIndex + 1;  
  while (keyPos > 0 && array[keyPos] < array[keyPos - 1]) {    
    swap(array, keyPos, keyPos - 1);
    keyPos--;    
  }
}

// main

const insertionSort = (array) => {
  for (let index = 0; index < array.length; index++) {    
    insert(array, index);
  }
  return array;
}

// tests

const testCases = [
  [0, 1, 0],
  [2, 2, -2],
  [1, 2, 3, 5, 4],
  [6, 7, 8, 5],
  [100, 90, 80, 70],
  [3, 5, 5, 5]
];

for (const test of testCases) {
  console.log("*".repeat(20));
  const copyForExpected = [...test];
  const expected = copyForExpected.sort((a, b) => a - b);
  const copyForResult = [...test];
  const result = insertionSort(copyForResult);
  console.log("case");
  console.log(test);
  console.log("output");  
  console.log(result);
  console.log("expected");
  console.log(expected);
}

