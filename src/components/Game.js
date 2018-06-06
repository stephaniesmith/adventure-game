import React, { Component } from 'react';
import { rooms, start as currentRoom } from '../rooms';
import Player from './Player';
import Room from './Room';

export default class Game extends Component {
  state = {
    player: {
      name: 'Player 1',
      inventory: ['cord']
    },
    rooms,
    currentRoom
  };

  handleMove = roomKey => {
    this.setState(prevState => ({
      currentRoom: prevState.rooms[roomKey]
    }));
  };

  render() {
    const { player, currentRoom } = this.state;

    return (
      <main>
        <Player player={player}/>
        <Room room={currentRoom}
          onMove={this.handleMove}/>
      </main>
    );
  }
}