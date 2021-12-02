const express = require('express');
const app = express();
const fs = require('fs');
const jsonNotes = require('./data.json');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const eachNote in jsonNotes) {
    const outer = jsonNotes[eachNote];
    for (const key in outer) {
      notesArray.push(outer[key]);
    }
  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const idNum = parseInt(req.params.id);
  var flag;
  if (idNum < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (idNum > 0) {
    for (const eachNote in jsonNotes) {
      const notesNum = jsonNotes[eachNote];
      for (const x in notesNum) {
        var noteId = notesNum[x];
        if (idNum === noteId.id) {
          res.status(200).send(noteId);
          flag = true;
        }
      }
    }

  } if (!flag) {
    res.status(404).send({ error: `cannot find note with id ${idNum}` });
  }

});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: 'content is a required field' });
  } else if (req.body.constructor === Object && Object.keys(req.body).length !== 0) {
    req.body.id = jsonNotes.nextId;
    const nextIdNum = jsonNotes.nextId++;
    jsonNotes.notes[nextIdNum] = req.body;
    fs.writeFile('./data.json', JSON.stringify(jsonNotes, null, 2), err => {
      if (err) {
        console.error(err);
        var flag = true;
      }
      if (!flag) {
        res.status(201);
        res.json(req.body);
        return jsonNotes;
      } else {
        res.status(500).send({ error: 'An unexpected error occurred.' });
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idNum = parseInt(req.params.id);
  var flag;
  if (idNum < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (idNum > 0) {
    for (const eachNote in jsonNotes) {
      const notesNum = jsonNotes[eachNote];
      for (const x in notesNum) {
        var noteId = notesNum[x];
        if (idNum === noteId.id) {
          flag = true;
          delete notesNum[x];
          fs.writeFile('./data.json', JSON.stringify(jsonNotes, null, 2), err => {
            if (err) {
              console.error(err);
              res.status(500).send({ error: 'An unexpected error occurred.' });
            } else if (flag) {
              res.sendStatus(204);
            }
          });
        }
      }
    }
    if (!flag) {
      res.status(404).send({ error: `cannot find note with id ${idNum}` });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idNum = parseInt(req.params.id);
  if (idNum < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: ' content is a required field' });
  } else if (idNum > 0 && req.body.constructor === Object && Object.keys(req.body).length !== 0) {
    for (const eachNote in jsonNotes) {
      const notesNum = jsonNotes[eachNote];
      for (const x in notesNum) {
        var noteId = notesNum[x];
        if (idNum === noteId.id) {
          var flag = true;
          jsonNotes.notes[idNum].content = req.body.content;
          res.json(noteId);
          fs.writeFile('./data.json', JSON.stringify(jsonNotes, null, 2), err => {
            if (err) {
              console.error(err);
              res.status(500).send({ error: 'An unexpected error occurred.' });
            } else {
              res.status(200);
            }
          });
        }
      }
    }
    if (!flag) {
      res.status(404).send({ error: `cannot find note with id ${idNum}` });
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
