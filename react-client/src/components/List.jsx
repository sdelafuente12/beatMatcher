import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';


// const List = ({ matchingTracks }) => (
const List = ({ matchingTracks }) => (
  <div>
    <h4> YR MATCHES!! </h4>
    There are { matchingTracks.length } matchingTracks.
    { matchingTracks.map(track => <ListItem track={track} />)}
  </div>
);
//
// TODO ^^ COME BACK TO THAT MAP

// List.propTypes = {
//   matchingTracks: PropTypes.arrayOf(PropTypes.shape({
//     // TODO
//   })).isRequired,
// };

export default List;
