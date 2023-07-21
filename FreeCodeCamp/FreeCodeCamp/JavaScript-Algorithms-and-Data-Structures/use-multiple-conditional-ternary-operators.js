// function checkSign(num, a, b) {
function checkSign(num) {
  /* return (a === b) ? "Positive"
  : (a > b) ? "Negative"
  : "Zero"
  */
  /*
  return num > 0 ? "Positive"
  : (num < 0) ? "Negative"
  : 0 === "Zero"
  */
 return num > 0 ? "positive" : num < 0 ? "negative" :
 "zero"
  // : (a < b) ? "Negative"
}

checkSign(10);