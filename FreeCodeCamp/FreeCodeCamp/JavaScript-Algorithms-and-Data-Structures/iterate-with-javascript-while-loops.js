// Setup
const myArray = [];

// Only change code below this line
let x = 5;
while (x > -1) { // INdefinite loop?
  myArray.push(x);
  x--;
}
// I originally had it set to x => 0 and x++ which caused an indefinite loop, and almost made my computer crash from running out of memory. I thought FreeCodeCamp would have safety precautions in place to prevent this, but it did not. I will have to be more careful from now on.