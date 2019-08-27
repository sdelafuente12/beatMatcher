import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.jsx';

// import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],

    };
    this.getItem = this.getItem.bind(this);
  }

  componentDidMount() {
    this.getItem()
      .then((data) => {
        this.setState({
          items: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }


  getItem() {
    return axios.get('/items')
      .then(response => response.data);
  }


  render() {
    // const { items } = this.state;

    return (
      <div>
        <div>
          <h1>Beat Matcher</h1>
          <Search onSearch={this.getItem} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
