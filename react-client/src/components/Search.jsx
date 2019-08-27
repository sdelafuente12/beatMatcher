import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      track: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      track: e.target.value,
    });
  }

  onSearch(track) {
    axios.post(`htttp://localhost:3000/track/?track=${track}`)
      .then(response => response.data);
  }




  handleClick() {
    const { onSearch } = this.props;
    const { track } = this.state;

    onSearch(track);
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

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
