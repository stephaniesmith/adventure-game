import React, { Component } from 'react';
import { rooms, start as currentRoom } from '../rooms';
import Player from './Player';
import Room from './Room';

export default class Game extends Component {
  state = {
    player: {
      name: 'Player 1',
      inventory: []
    },
    rooms,
    currentRoom
  };

  handleMove = roomKey => {
    this.setState(prevState => ({
      currentRoom: prevState.rooms[roomKey]
    }));
  };

  handlePickup = item => {
    this.setState(({ player, currentRoom }) => {
      const index = currentRoom.items.indexOf(item);
      if(index === -1) return;
      currentRoom.items.splice(index, 1);

      player.inventory.push(item);
      console.log('INV!!!', player.inventory);

      return { player, currentRoom };
    });
  };

  handleUse = item => {
    console.log(item);
  };

  render() {
    const { player, currentRoom } = this.state;

    return (
      <main>
        <Player player={player}
          onUse={this.handleUse}/>
        <Room room={currentRoom}
          onMove={this.handleMove}
          onPickup={this.handlePickup}/>
      </main>
    );
  }
}