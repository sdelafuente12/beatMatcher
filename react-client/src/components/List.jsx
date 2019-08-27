import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';


// const List = ({ items }) => (
const List = ({ items }) => (
  <div>
    <h4> List Component </h4>
    There are {items.length } items.
    { items.map(item => <ListItem item={item} />)}
  </div>
);
//
// TODO ^^ COME BACK TO THAT MAP

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    // TODO
  })).isRequired,
};

export default List;
