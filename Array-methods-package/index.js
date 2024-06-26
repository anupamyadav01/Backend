function sumArray(array) {
  return array.reduce((acc, val) => acc + val, 0);
}

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) throw new TypeError("Input should be an array");
  return [...new Set(arr)];
}

module.exports = {
  sumArray,
  removeDuplicates,
};
