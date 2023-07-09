/* 2023.05.15 
// Unmodified
// Unmodified
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// Definitions
const subArray = myArray[3];
const nestedSubarray = myArray[3][0];
const myData = myArray[1, 2];

// To see what I am doing in the console
console.log(myArray + " _ ");
console.log(subArray + " _ ");
console.log(nestedSubarray + " _ ");
console.log(myData + " _ ");
*/
// Attempt 2023.05.16
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

// Definitions
const subArray = myArray[3];
const nestedSubarray = myArray[2][1];
// const myData = myArray[1, [3, 2], [3, 2]];
const myData = myArray[2][1];

// To see what I am doing in the console
console.log(myArray + " _ ");
console.log(subArray + " _ ");
console.log(nestedSubarray + " _ ");
console.log(myData + " _ ");