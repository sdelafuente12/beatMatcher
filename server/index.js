const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const { GETSONGBPM_TOKEN } = require('./config');
const { insertSongs, selectTopFive } = require('../database-mysql/index.js');

const app = express();
app.use(bodyParser.json());
// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname, '../react-client/dist')));


const getBPM = id => axios.get(`https://api.getsongbpm.com/song/?api_key=${GETSONGBPM_TOKEN}&id=${id}`);
const getMatchingBPM = bpm => axios.get(`https://api.getsongbpm.com/tempo/?api_key=${GETSONGBPM_TOKEN}&bpm=${bpm}`);

const getSongInfo = track => axios.get(`https://api.getsongbpm.com/search/?api_key=${GETSONGBPM_TOKEN}&type=song&lookup=${track}`)
  .then((response) => {
    const { title } = response.data.search[0];
    const artist = response.data.search[0].artist.name;
    insertSongs([title, artist]);
    return getBPM(response.data.search[0].id);
  })
  .then(res => getMatchingBPM(res.data.song.tempo))
  .then(rezzy => rezzy.data.tempo.slice(0, 10));


app.post('/track', (req, res) => {
  getSongInfo(req.body.track)
    .then((rezo) => {
      res.send(rezo);
      // res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
      console.log(`app.post err${error.text}`);
    });
});

app.get('/top5', (req, res) => {
  selectTopFive((error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log('top5 retrieved');
      res.send(result.slice(-5));
    }
  });
});


app.listen(3000, () => {
  console.log('Hey! Im listening on port 3000!');
});

// UNCOMMENT FOR ANGULAR
// app.use(express.static(path.join(__dirname, '../angular-client')));
// app.use(express.static(path.join(__dirname, '../node_modules')));

// this endpoint was '/items' before its was '/news'

// app.get('/items', (req, res) => {
//   items.selectAll((err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });
// `https://api.getsongbpm.com/song/?api_key=60d1a06cbf35562b0214875e2519c6b6&id=${id}`
// `https://api.getsongbpm.com/tempo/?api_key=60d1a06cbf35562b0214875e2519c6b6&bpm=${bpm}`
