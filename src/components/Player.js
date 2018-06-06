import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChooseItem from './ChooseItem';

export default class Player extends Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
    onUse: PropTypes.func.isRequired
  };

  render() {
    const { player, onUse } = this.props;
    const { username, inventory } = player;

    return (
      <div>
        <h2>Hello, {username}</h2>
        <h4>Inventory:</h4>
        <ChooseItem items={inventory} onChoose={onUse}/>
      </div>
    );
  }
}