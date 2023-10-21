// utils

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[secondIndex];
  array[secondIndex] = array[firstIndex];
  array[firstIndex] = temp;
}

const indexOfMinimum = (array, startIndex) => {
  let minValue = array[startIndex];
  let minIndex = startIndex;
  for(let i = minIndex + 1; i < array.length; i++) {
      if(array[i] < minValue) {
          minIndex = i;
          minValue = array[i];
      }
  } 
  return minIndex;
}

// main

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    // console.log(array);
    swap(array, i, indexOfMinimum(array, i));
  }
  return array;
}

// console.log(selectionSort([1,4, 12, -4, 0, 99, 45]));