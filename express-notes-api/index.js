const express = require('express');
const app = express();
const fs = require('fs');
const jsonNotes = require('./data.json');

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in jsonNotes.notes) {
    notesArray.push(jsonNotes.notes[id]);

  }
  res.json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const idNum = parseInt(req.params.id);
  if (idNum < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (idNum > 0) {
    if (!jsonNotes.notes[idNum]) {
      res.status(404).send({ error: `cannot find note with id ${idNum}` });
    } else {
      res.status(200).send(jsonNotes.notes[idNum]);
    }
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).send({ error: 'content is a required field' });
  } else {
    req.body.id = jsonNotes.nextId;
    const nextIdNum = jsonNotes.nextId++;
    jsonNotes.notes[nextIdNum] = req.body;
    fs.writeFile('derp/data.json', JSON.stringify(jsonNotes, null, 2), err => {
      if (err) {
        console.error(err);
        var flag = true;
        res.status(500).send({ error: 'An unexpected error occurred.' });
      }
      if (!flag) {
        res.status(201);
        res.json(req.body);
        return jsonNotes;
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
    if (jsonNotes.notes[idNum]) {
      flag = true;
    }
    delete jsonNotes.notes[idNum];
    fs.writeFile('./data.json', JSON.stringify(jsonNotes, null, 2), err => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: 'An unexpected error occurred.' });
      } else if (flag) {
        res.sendStatus(204);
      }
    });

    if (!flag) {
      res.status(404).send({ error: `cannot find note with id ${idNum}` });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idNum = parseInt(req.params.id);
  if (idNum < 0) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!req.body) {
    res.status(400).send({ error: ' content is a required field' });
  } else if (req.body) {
    if (jsonNotes.notes[idNum]) {
      var flag = true;
      jsonNotes.notes[idNum].content = req.body.content;
      fs.writeFile('./data.json', JSON.stringify(jsonNotes, null, 2), err => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: 'An unexpected error occurred.' });
        } else {
          res.status(200);
          res.json(jsonNotes.notes[idNum]);
        }
      });
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
