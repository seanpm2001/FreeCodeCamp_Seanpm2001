function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  // Object.freeze(PI);
  // Object.freeze(MATH_CONSTANTS);
  // Object.freeze(PI, 3.14);
  Object.freeze(MATH_CONSTANTS); // TypeError: PI is read only
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();