import React from 'react';
import PropTypes from 'prop-types';

export default function ChooseItem({ items, onChoose }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.key}>
          <button onClick={() => onChoose(item)}>{item.description}</button>
        </li>
      ))}
    </ul>
  );
}

ChooseItem.propTypes = {
  items: PropTypes.array,
  onChoose: PropTypes.func.isRequired
};