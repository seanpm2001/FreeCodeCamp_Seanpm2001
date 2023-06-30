// Setup
function abTest(a, b) {
  // Only change code below this line
  // if (a & b > 0) {
  // if (a > 1) {
  /*
  if (a & b > 0) {
    return "undefined";
    // break;
    // console.log(a);
  } else {
    
    console.log(a + "\n" + b);
    return a && b;
    // return b;
  }
  */
  // I didn't remember that || means or. Also, I didn't read the hint correctly about undefined being a keyword
  /*if (a > 0 || b > 0) 
    return undefined;
  else
    console.log(a & b);
    */
  /* else {
    console.log(abTest(2, 2));
    console.log(abTest(-2, 2));
  }*/
  // if (a === 0 || b === 0)
  /*if (a <= 0 || b <= 0) { // Closer, but not there
    return undefined;
  }*/
  if (a < 0 || b < 0) {
  //  return undefined;
  return;
  } // What is going on? Neither the video hint or the forum is helping
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);