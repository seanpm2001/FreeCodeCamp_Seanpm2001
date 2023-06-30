// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  var lookup = { // var not const
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val] // Forgot this line originally
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");