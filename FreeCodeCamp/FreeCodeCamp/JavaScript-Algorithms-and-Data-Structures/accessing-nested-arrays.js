const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// const secondTree = myPlants.trees["pine"] // Building off of the previous lesson 
// const secondTree = myPlants.trees.pine // Building off of the previous lesson 
// const secondTree = myPlants[trees.pine] // Building off of the previous lesson 
// const secondTree = myPlants["trees"["pine"]] // Building off of the previous lesson
// const secondTree = myPlants["trees"["pine"]] // Building off of the previous lesson
// const secondTree = myPlants[1].list["pine"] // A couple of new things: [1] goes through the array, and .list lets you access the second portion.
const secondTree = myPlants[1].list[1] // A couple of new things: [1] goes through the array, and .list lets you enter the array, then [1] would access entry 1 (2 in MATLAB) of the array