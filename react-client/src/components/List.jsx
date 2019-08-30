import React from 'react';
// import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';


// const List = ({ matchingTracks }) => (
const List = ({ matchingTracks, top5 }) => (
  <div>
    <h3>top 5 tracks of the day</h3>
    <ol> { top5.map(track => <li> {track.title}- {track.artist} </li>) } </ol>
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
