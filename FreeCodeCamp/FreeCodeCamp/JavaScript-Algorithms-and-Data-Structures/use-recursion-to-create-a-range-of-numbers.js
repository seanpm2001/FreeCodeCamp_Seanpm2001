function rangeOfNumbers(startNum, endNum) {
  // return startNum ? [] : [startNum, ...rangeOfNumbers(startNum + 1)];
  // return startNum ? [] : [startNum, ...rangeOfNumbers(startNum + 1)];
  return endNum < startNum
  ? []
  : [...rangeOfNumbers(startNum, endNum - 1), endNum]
  // return [];
};
// console.log(rangeOfNumbers(5))
// No unit test of all 112 previous lessons as a final lesson?