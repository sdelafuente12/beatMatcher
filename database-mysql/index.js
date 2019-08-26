const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'FILL_ME_IN',
  database: 'test',
});

const selectAll = (callback) => {
  // connection.query('SELECT * FROM items', (err, items) => {
  connection.query('SELECT * FROM items', (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
