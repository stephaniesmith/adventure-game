import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired
  };

  render() {
    const { player } = this.props;
    const { name, inventory } = player;

    return (
      <div>
        <h2>{name}</h2>
        <p>{inventory[0]}</p>
      </div>
    );
  }
}