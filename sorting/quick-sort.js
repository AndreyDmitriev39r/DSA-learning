// utils

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[secondIndex];
  array[secondIndex] = array[firstIndex];
  array[firstIndex] = temp;
}

const partition = (array, p, r) => {  
  let q = p;
  let j = p;
  while (j < r) {
    if (array[j] <= array[r]) {
      swap(array, j, q);
      q++;
    }
    j++;
  }
  swap(array, r, q);
  return q;
};

// main quick sort fn

const quickSort = (array, p, r) => {
  if (p < r) {
      var pivot = partition(array, p, r);
      quickSort(array, p, pivot - 1);
      quickSort(array, pivot + 1, r);
  }
};

// test cases

const tests = [
  [],
  [1],
  [2, 1],
  [74, 9, -1, 75, 3, 3, 3],
  [2, 1, 4, 3, 5],
  [8, 7, 6, 5 ,4, 3]
];

for (const test of tests) {
  let copy1 = [...test];
  let copy2 = [...test];  
  quickSort(copy1, 0, copy1.length - 1);
  let expected = copy2.sort((a, b) => a - b);
  console.log(`test case ${test}`);
  console.log(`result:  ${copy1}`);
  console.log(`expected:  ${copy2.sort((a, b) => a - b)}`);
};