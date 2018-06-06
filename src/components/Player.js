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
    const { name, inventory } = player;

    return (
      <div>
        <h2>{name}</h2>
        <ul>
          <ChooseItem items={inventory} onChoose={onUse}/>
        </ul>
      </div>
    );
  }
}