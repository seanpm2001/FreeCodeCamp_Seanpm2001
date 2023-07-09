function nextInLine(arr, item) {
  // Only change code below this line
  // function nextInLine(testArr, item) {
  // function nextInLine(arr, item) { // Do not create a fucntion
      // arr[testArr + 7];
      /*arr[item + 7];
      arr[item + 7];
      arr[arr + 7];*/
      /*
      arr[push[10]];
      arr[shift[1]];
      */
  arr.push(item);
  const removed = arr.shift();
  return removed;
  return item;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));