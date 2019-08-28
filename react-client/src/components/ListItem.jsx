import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ track }) => (
  <div>
    { track.song_title }
    { track.artist.name }
    { track.album.title }
    <img src={track.album.img} />

  </div>
  // song_title
  // artist.name
  // album.title
  // album.img
);

ListItem.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListItem;
