// TODO implememnt linear-time partitioning(in another file)

// main quick sort fn

const quickSort = (array, p, r) => {
  if (p < r) {
      var pivot = partition(array, p, r);
      quickSort(array, p, pivot - 1);
      quickSort(array, pivot + 1, r);
  }
};

// TODO - addtest cases, use merge-sort cases as an example