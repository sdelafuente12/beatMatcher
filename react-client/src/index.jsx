import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';

import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      matchingTracks: [],
    };
    // this.getItem = this.getItem.bind(this);
    this.getTrack = this.getTrack.bind(this);
  }

  componentDidMount() {
    // this.getTrack();
  }


  // getItem() {
  //   return axios.get('/items')
  //     .then(response => response.data);
  // }

  getTrack(track) {
    axios.post('/track', { track })
      .then((rezo) => {
        console.log(rezo);
        this.setState({
          matchingTracks: rezo.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { matchingTracks } = this.state;
    return (
      <div>
        <div>
          <h1>Beat Matcher</h1>
          <Search getTrack={this.getTrack} />
          <List matchingTracks={matchingTracks} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
