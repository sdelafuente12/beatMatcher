import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ track }) => (
  <div>
    <h1>{track.song_title}</h1>
    <h2>{track.artist.name}</h2>
    <h3>{track.album.title}</h3>
    <img src={track.album.img} />
  </div>

);

ListItem.propTypes = {
  item: PropTypes.shape({

  }).isRequired,
};

export default ListItem;
