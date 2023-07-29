// var myConcat = function(arr1, arr2) {
const myConcat = (arr1, arr2) => {
  "use strict"; // I always forget this
  return arr1.concat(arr2);
}
console.log(myConcat([1, 2], [3, 4, 5]));