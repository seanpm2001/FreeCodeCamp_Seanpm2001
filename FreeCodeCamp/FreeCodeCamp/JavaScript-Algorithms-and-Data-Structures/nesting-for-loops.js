function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let b = 0; b < arr.length; b++) {
    for (let c = 0; c < arr[b].length; c++) { // Finally, C++
      // console.log(arr[b][c]); // Don't reverse the order, returns undefined // This is where I went wrong
      product *= arr[b][c] // 5040 BC
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);