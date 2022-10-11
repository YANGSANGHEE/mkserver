const express = require('express');
const app = express();
const db = require('./db');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  db.connection.query('select * from user', (error, rows, filed) => {
    if (error) throw error;
    res.send(rows);
  });
  console.log('db연동 완료!');
});

app.listen(3333, () => {
  console.log('3333 sever start');
});