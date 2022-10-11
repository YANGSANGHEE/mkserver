const db = require('mysql2');

const connection = db.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ysh940516!',
  database: 'test'
});

connection.connect();

module.exports = {
  connection
}