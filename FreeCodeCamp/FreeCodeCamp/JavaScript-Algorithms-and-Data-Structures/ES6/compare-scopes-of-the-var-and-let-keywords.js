function checkScope() {
  "use strict" // Why was this not in the documentation?
  let i = 'function scope';
  // let j = 'block scope';
  if (true) {
    let i = 'block scope'; // Have to add in a second one
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}