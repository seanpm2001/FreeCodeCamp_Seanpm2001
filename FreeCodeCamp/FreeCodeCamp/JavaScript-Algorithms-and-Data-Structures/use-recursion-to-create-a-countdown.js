// Only change code below this line
function countdown(n){
  // if (n < 1) {
    // return [];
    return n < 1 ? [] : [n, ...countdown(n - 1)];
    // This square bracket scope is interesting, I am not entirely sure what ... does
    // I almost completed this lesson without any help, then found that I didn't do anything correctly.
// } else {
  // const counter = countdown(n + 1); // Hope this isn't too recursive
  // var counter = countdown(n - 1);
  // InternalError: too much recursion
  // That's a new one
  // counter.push(n - 1);
  // Alternatively: counter.push(n + 1) for counting up, while off by 1
  // counter.push(n);
  // return counter;
  // return countdown
// }}
}
console.log(countdown(5));
// Only change code above this line