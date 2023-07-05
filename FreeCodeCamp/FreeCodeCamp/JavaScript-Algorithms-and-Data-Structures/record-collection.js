// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
if (value === ""){ // If the value is empty
  // delete[id][prop]; // Delete property of ID
  delete records[id][prop]; // Delete property of records ID
} else if (prop !== "tracks" && value !== "") {  // Else if the property is not equal to the value "tracks" and the value is not equal to nothing
  records[id][prop] = value; // Add the value to the record
} else if (prop === "tracks" && value !== "") { // Else if properties are equal to tracks and the value is not equal to nothing
  if (records[id].hasOwnProperty("tracks") === false) { // And if the record ID does not have its own property of the value "tracks"
    records[id][prop] = []; // Then empty the record (?)
  }
  records[id][prop].push(value); // Push the property ID of records to a new value
  }
  return records;
}
updateRecords(recordCollection, 5439, 'artist', 'ABBA');