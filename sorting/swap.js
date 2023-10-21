// used in many sorting probs, like bubble or selection

const swap = (array, firstIndex, secondIndex) => {
  const temp = array[secondIndex];
  array[secondIndex] = array[firstIndex];
  array[firstIndex] = temp;
}