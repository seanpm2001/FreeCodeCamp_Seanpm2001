// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
/* for (let total = 0; total < myArr.length; total++) {
  console.log(myArr[total]);
}
*/
let total = 0 // is var equivalent to let here?
for (let b = 0; b < myArr.length; b++) {
  // console.log(myArr[b]);
  total += myArr[b];
}
console.log(total);