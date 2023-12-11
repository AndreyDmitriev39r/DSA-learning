// implementation based on Khan Academy's pseudocode
// utility function for quick sort algorithm
// the rightmost element used as the pivot

// this function returning array
// in the quick sort implementation it'll be modified to return q - the pivot index

// utils

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[secondIndex];
  array[secondIndex] = array[firstIndex];
  array[firstIndex] = temp;
}

// variables

// p - index of array's 1st element
// r - index of array's last element
// q - the leftmost element in group which is greater than the pivot
// j - index of element currently checked against the pivot

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
  return array;
};

// tests

const testCases = [
  {
    case: [12, 7, 14, 9, 10, 11],
    expected: [7, 9, 10, 11, 14, 12]
  },
];


for (const test of testCases) {
  console.log(`~~~~~Case~~~~~`);
  console.log(test.case);
  console.log(`Output`);
  console.log(partition(test.case, 0, test.case.length - 1));
  console.log(`Expected`);
  console.log(test.expected);
}