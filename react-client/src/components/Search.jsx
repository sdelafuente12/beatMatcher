import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track: '',

    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  // onSearch(track) {
  //   axios.post(`htttp://localhost:3000/track/?track=${track}`)
  //     .then(response => response.data);
  // }

  handleChange(e) {
    this.setState({
      track: e.target.value,
    });
  }


  handleClick() {
    const { getTrack } = this.props;
    const { track } = this.state;

    getTrack(track);
  }

  render() {
    const { track } = this.state;

    return (
      <div>
        <h4>Find yr rythmn!</h4>
        Search a track: <input value={track} onChange={this.handleChange} />
        <button onClick={this.handleClick} type="button">search</button>
      </div>
    );
  }
}

//

Search.propTypes = {
  getTrack: PropTypes.func.isRequired,
};

export default Search;
