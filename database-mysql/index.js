const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'beatMatcher',
});


const selectTopFive = (callback) => {
  connection.query('SELECT * FROM songsSearched', (err, songsSearched) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(songsSearched);
      callback(null, songsSearched);
    }
  });
};

const insertSongs = (songToInsert) => {
  connection.query('INSERT INTO songsSearched (ID, title, artist) VALUES (DEFAULT, ?, ?)',
    songToInsert, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('song Saved!');
        console.log(results);
      }
    });
};

module.exports.selectTopFive = selectTopFive;
module.exports.insertSongs = insertSongs;
