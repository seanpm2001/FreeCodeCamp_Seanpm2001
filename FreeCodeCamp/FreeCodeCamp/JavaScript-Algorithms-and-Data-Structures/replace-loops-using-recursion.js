function sum(arr, n) {
  // Only change code below this line
  // function sum(arr, n) { // This whole ime, I wasn't supposed to be doing this
  if (n <= 0) {
      return 0; // Can't just use return, have to add a value
  } else {
      return sum(arr, n - 1) + arr[n - 1];
  }
  // }} // I like to include as many curly brackets as possible on one line
  // Only change code above this line
}