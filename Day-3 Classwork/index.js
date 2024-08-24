function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const midVal = sortedArray[middle];

    if (midVal === target) {
      return middle;
    } else if (midVal < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

module.exports = binarySearch;
