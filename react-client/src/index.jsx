import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import List from './components/List.jsx';

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
    return axios.get('items')
      .then(response => response.data);
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <div id="app" />
        <script type="text/javascript" src="bundle.js" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center text-success">
                STUCK AT A PARTY?
              </h3>
              <p className="text-center text-primary">
                BREAK THE ICE!
              </p>
              <p className="text-center text-info">
                HOW ARE YOU FEELING?
              </p>
              <div className="row">
                <div className="col-md-6">
                  <h3 className="text-left text-danger">
                    Socially Conscious?
                  </h3>
                  <p>
                    <strong>CURRENT EVENT HERE</strong>
                  </p>
                  <button type="button" className="btn btn-success btn-sm">
                    News
                  </button>
                </div>
                <div className="col-md-6">
                  <h3 className="text-danger">
                    Funny?
                  </h3>
                  <p>
                    <strong>JOKE HERE</strong>
                  </p>
                  <button type="button" className="btn btn-success btn-sm">
                    Jokes
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <h3 className="text-danger">
                    Flirty?
                  </h3>
                  <p>
                    <strong>PICKUP LINE HERE</strong>
                  </p>
                  <button type="button" className="btn btn-success btn-sm">
                    PickUp
                  </button>
                </div>
                <div className="col-md-6">
                  <h3 className="text-danger">
                    Intellectual?
                  </h3>
                  <p>
                    <strong>FUN FACT HERE</strong>
                  </p>
                  <button type="button" className="btn btn-success btn-sm">
                    Facts
                  </button>
                </div>
              </div>
              <h3 className="text-center">
                drunk? tired? rude? racist? sexist?
              </h3>
              <p className="text-center text-danger">
                GO HOME
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
