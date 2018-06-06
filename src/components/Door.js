import React from 'react';
import PropTypes from 'prop-types';

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default function Door({ direction }) {
  return (
    <li>
      <button>
        {directions[direction]}
      </button>
    </li>
  );
}

Door.propTypes = {
  direction: PropTypes.string.isRequired
};