const fs = require('fs');
const jsonData = require('./data.json');
const notes = jsonData.notes;
const keyWord = process.argv[2];
const addedNote = process.argv[3];
const newNote = process.argv[4];

if (keyWord === 'read') {
  for (const x in notes) {
    console.log(`${x}: ${notes[x]}`);
  }
} else if (keyWord === 'create') {
  const nextEntry = jsonData.nextId++;
  jsonData.notes[nextEntry] = addedNote;
  reWriteJson();
} else if (keyWord === 'delete') {
  delete jsonData.notes[addedNote];
  reWriteJson();
} else if (keyWord === 'update') {
  jsonData.notes[addedNote] = newNote;
  reWriteJson();
}

function reWriteJson() {
  fs.writeFile('./data.json', JSON.stringify(jsonData, null, 2), err => {
    if (err) {
      console.log(err);
    }
    return jsonData;

  });
}
