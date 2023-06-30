function checkObj(obj, checkProp) {
  // Only change code below this line
  //function checkProp(object, property) {
  //  return object.hasOwnProperty(property);
  //}
  //checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
  //checkObj({city: "Seattle"}, "district");
  // function checkObj(obj, checkProp) {
  /*  if (obj.hasOwnProperty(checkProp)) {
      // return object.checkProp;
      return object[checkProp];
  } else {
    return "Not Found";
  }//}
  */
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
  // Only change code above this line
}