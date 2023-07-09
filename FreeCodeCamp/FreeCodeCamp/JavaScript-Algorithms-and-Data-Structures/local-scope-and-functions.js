function myLocalScope() {
  // Only change code below this line

  console.log('inside myLocalScope', myVar);
  const loc = "foo"
  const myVar = loc;
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
// var myVar
