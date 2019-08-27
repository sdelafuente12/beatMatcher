const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('../database-mysql');

const app = express();
app.use(bodyParser.json());
// UNCOMMENT FOR REACT
app.use(express.static(path.join(__dirname, '../react-client/dist')));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(path.join(__dirname, '../angular-client')));
// app.use(express.static(path.join(__dirname, '../node_modules')));

// this endpoint was '/items' before its was '/news'

app.get('/items', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/track', (req, res) => {
  getSongInfo(req)
  .then(

  )
  .catch((error) => console.log('THIS IS A GET ERROR' + error))
  res.send(res);
});


const getSongInfo(track) {
  const options = {
    url: `https://api.getsongbpm.com/search/?api_key=${GETSONGBPM_TOKEN}&type=song&lookup=${track}`,
  }
  return axios.get(options.url, options);
}

// const getBPM(id) {
//   const options = {
//     url: `https://api.getsongbpm.com/song/?api_key=60d1a06cbf35562b0214875e2519c6b6&id=${id}`,
//     headers: {
//       'User-Agent': 'request',
//       Authorization: `token ${config.GETSONGBPM_TOKEN}`,
//     },
//   }
//   return axios.get(options.url, options);
// }

// const getMatchingBPM(bpm) {
//   const options = {
//     url: `https://api.getsongbpm.com/tempo/?api_key=60d1a06cbf35562b0214875e2519c6b6&bpm=${bpm}`,
//     headers: {
//       'User-Agent': 'request',
//       Authorization: `token ${config.GETSONGBPM_TOKEN}`,
//     },
//   }
//   return axios.get(options.url, options);
// }

app.listen(3000, () => {
  console.log('Hey! Im listening on port 3000!');
});
