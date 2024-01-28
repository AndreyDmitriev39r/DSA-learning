// linear merging of two sorted subarrays

// Takes in an array that has two sorted subarrays,
//  from [p..q] and [q+1..r], and merges the array
const merge = (array, p, q, r) => {
  const lowHalf = [];
  const highHalf = [];

  let k = p;
  
  for (let i = 0; k <= q; i++, k++) {
      lowHalf[i] = array[k];
  }
  for (let j = 0; k <= r; j++, k++) {
      highHalf[j] = array[k];
  }  

  k = p;
  i = 0;
  j = 0;
  
  // Repeatedly compare the lowest untaken element in
  //  lowHalf with the lowest untaken element in highHalf
  //  and copy the lower of the two back into array
  
  while (i < lowHalf.length && j < highHalf.length) {
      if (lowHalf[i] < highHalf[j]) {
          array[k] = lowHalf[i];
          i++;
      } else {
          array[k] = highHalf[j];
          j++;
      }
      k++;
  }
  // Once one of lowHalf and highHalf has been fully copied
  //  back into array, copy the remaining elements from the
  //  other temporary array back into the array
  while (i < lowHalf.length) {
      array[k] = lowHalf[i];
      k++;
      i++;
  }
  while (j < highHalf.length) {
      array[k] = highHalf[j];
      k++;
      j++;
  }
};

// main

const mergeSort = (array, p, r) => {
  if (p < r) {
    const q = Math.floor((r + p) / 2);
    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);
    merge(array, p, q, r);
  }
};

// tests

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
  mergeSort(copy1, 0, copy1.length - 1);
  let expected = copy2.sort((a, b) => a - b);
  console.log(`test case ${test}`);
  console.log(`result:  ${copy1}`);
  console.log(`expected:  ${copy2.sort((a, b) => a - b)}`);
};
