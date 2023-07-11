// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  /* if (name = null) {
  } else {
  return "No such contact";
  }
  */ // What was I doing?
  for (var c = 0; c < contacts.length; c++) {
    if (contacts[c].firstName === name) { /// If array of contacts of first Name is equal to name
      return contacts[c][prop] || "No such property"; // This or operator is interesting, returns contacts and property, or "no such property"
  }}
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");