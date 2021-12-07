const express = require('express');
const app = express();
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = 'select * from "grades"';
  db.query(sql)
    .then(results => {
      res.status(200).json(results.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.post('/api/grades', (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ error: 'name is a required field' });
  } else if (!req.body.course) {
    return res.status(400).send({ error: 'course is a required field' });
  } else if (!Number(req.body.score)) {
    return res.status(400).send({ error: 'score must be a number' });
  } else if (req.body.score < 0) {
    return res.status(400).send({ error: 'score must be a positive integer' });
  }
  const sql = 'insert into "grades" ("name", "course", "score") values ($1, $2, $3) returning *';
  const values = [req.body.name, req.body.course, req.body.score];
  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ error: 'name is a required field' });
  } else if (!req.body.course) {
    return res.status(400).send({ error: 'course is a required field' });
  } else if (!Number(req.body.score)) {
    return res.status(400).send({ error: 'score must be a number' });
  } else if (req.body.score < 0) {
    return res.status(400).send({ error: 'score must be a positive integer' });
  }
  const studenGrade = parseInt(req.params.gradeId);
  const sql = 'update "grades" set "name" = $1, "course" = $2, score = $3 where "gradeId" = $4 returning *';
  const values = [req.body.name, req.body.course, req.body.score, studenGrade];
  db.query(sql, values)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).json({ error: 'user does not exist' });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });

});

app.delete('/api/grades/:gradeId', (req, res) => {
  const studenGrade = parseInt(req.params.gradeId);
  if (studenGrade < 0) {
    return res.status(400).json({ error: 'Please enter a valid grade Id' });
  }
  const sql = 'delete from "grades" where "gradeId" = $1 returning *';
  const values = [studenGrade];
  db.query(sql, values)
    .then(result => {
      if (!result.rows[0]) {
        return res.status(404).json({ error: 'user does not exist' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
