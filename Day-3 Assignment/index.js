function sumArray(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

module.export = { sumArray, removeDuplicates };
